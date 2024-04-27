const expenseList = require("../../models/expenseModel");

exports.expense = async (req, res) => {
  try {
    const { userId, id } = req.params;

    console.log(userId, id);

    let result = await expenseList.deleteOne({
      userId: userId,
      _id: id,
    });

    if (result.deletedCount > 0) {
      res.status(200).json({ message: "Item removed successfully" });
    } else {
      res.status(404).json({ message: "Item not found" });
    }
  } catch (error) {
    console.error("Error getting data from the database:", error);
    res.status(500).send("Internal Server Error");
  }
};
