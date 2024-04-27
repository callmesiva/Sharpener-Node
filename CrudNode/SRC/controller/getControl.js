const expenseList = require("../../models/expenseModel");
const premium = require("../../models/premiumModel");

exports.expense = async (req, res) => {
  try {
    const { userId } = req.params;
    const expenseData = await expenseList.find({ userId: userId });

    const result = [];
    let count = 1;
    for (const obj of expenseData) {
      let arr = [count++, obj.money, obj.ctg, obj.des, obj._id];
      result.push(arr);
    }

    res.status(200).send(result);
  } catch (error) {
    console.error("Error getting data from the database:", error);
    res.status(500).send("Internal Server Error");
  }
};

exports.premium = async (req, res) => {
  try {
    const { userId } = req.params;
    const result = await premium.find({ userId: userId });
    console.log();

    res.status(200).send(result);
  } catch (error) {
    console.error("Error getting data from the database:", error);
    res.status(500).send("Internal Server Error");
  }
};
