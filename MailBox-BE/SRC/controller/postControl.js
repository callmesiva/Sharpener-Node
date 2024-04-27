const chatModel = require("../../models/chatModel");

exports.mailInfo = async (req, res) => {
  try {
    const data = req.body;

    let postData = await chatModel.create(data);

    data.sendBox.to = data.userMail;

    let senderData = {
      userMail: data.to,
      to: "",
      from: data.userMail,
      inBox: data.sendBox,
      sendBox: {},
    };

    let postData2 = await chatModel.create(senderData);

    res.status(200).send("Insert SuccessFully");
  } catch (error) {
    console.error("Error inserting data into the database:", error);
    res.status(500).send("Internal Server Error");
  }
};
