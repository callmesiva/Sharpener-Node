const chatModel = require("../../models/chatModel");

exports.mailInfo = async (req, res) => {
  try {
    const { id } = req.params;

    await chatModel.destroy({
      where: {
        id: id,
      },
    });

    res.status(200).send("successFully deleted");
  } catch (error) {
    console.error("Error getting data from the database:", error);
    res.status(500).send("Internal Server Error");
  }
};
