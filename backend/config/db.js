const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {});
    console.log("Mongodb connceted");
  } catch (err) {
    console.error("Error connceting to mongodb", err);
    process.exit(1);
  }
};
module.exports = connectDB;
