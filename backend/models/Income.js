const mongoose = require("mongoose");
const { applyTimestamps } = require("./User");
const IncomeSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
    icon: { type: String },
    source: { type: String, required: true },
    amount: { type: Number, required: true },
    date: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Income", IncomeSchema);
