const expense = require("../../models/expenseModel");
const premium = require("../../models/premiumModel");

exports.expenseList = async (req, res) => {
  try {
    const { userId } = req.params;
    const { money, ctg, des } = req.body;
    const data = {
      userId,
      money,
      ctg,
      des,
    };
    console.log(data);
    const expenseList = new expense(data);
    await expenseList.save();

    res.status(200).send("Insert SuccessFully");
  } catch (error) {
    console.error("Error inserting data into the database:", error);
    res.status(500).send("Internal Server Error");
  }
};

exports.premium = async (req, res) => {
  try {
    const { userId } = req.params;
    const { isActivated } = req.body;
    const data = {
      userId,
      isActivated,
    };
    console.log(data);
    const pre = new premium(data);
    await pre.save();

    res.status(200).send("Insert SuccessFully");
  } catch (error) {
    console.error("Error inserting data into the database:", error);
    res.status(500).send("Internal Server Error");
  }
};
