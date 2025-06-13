const xlsx = require("xlsx");
const Expense = require("../models/Expense");
const { BsFiletypeXlsx } = require("react-icons/bs");

//Add Expense source
exports.addExpense = async (req, res) => {
  const userId = req.user.id;
  try {
    const { icon, source, amount, date } = req.body;
    //validation:check for missing fields
    if (!source || !amount || !date) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const newExpense = new Income({
      userId,
      icon,
      source,
      amount,
      date: new Date(date),
    });
    await newExpense.save();
    res.status(200).json(newExpense);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

//Get all Expense source
exports.getAllExpense = async (req, res) => {
  const userId = req.user.id;
  try {
    const expense = await Expense.find({ userId }).sort({ date: -1 });
    res.json(expense);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

//Delete Expense source
exports.deleteExpense = async (req, res) => {
  const userId = req.user.id;
  try {
    await Expense.findByIdAndDelete(req.params.id);
    res.json({ message: "Income deleted sucessfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

//Downlooad Income source
exports.downloadExpenseExcel = async (req, res) => {
  const userId = req.user.id;
  try {
    const expense = await Expense.find({ userId }).sort({ date: -1 });
    //prepare data for excel
    const data = expense.map((item) => ({
      category: item.category,
      Amount: item.amount,
      Date: item.date,
    }));
    const wb = xlsx.utils.book_new();
    const ws = xlsx.utils.json_to_sheet(data);
    xlsx.utils.book_append_sheet(wb, ws, "Income");
    xlsx.writeFile(wb, "income_details.xlsx");
    res.download("income_details.xlsx");
  } catch (error) {
    res.send(500).json({ message: "Server Error" });
  }
};
