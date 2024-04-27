const chatModel = require("../../models/chatModel");

exports.mailInfo = async (req, res) => {
  try {
    let { boxType, userMail } = req.params;

    let mailData;

    if (boxType == "inbox") {
      let data = await chatModel.findAll({
        attributes: ["inBox", "id"],
        where: { userMail: userMail },
        raw: true,
      });
      let res = data.map((mail) => {
        if (mail.inBox != null) {
          if (Object.keys(mail.inBox).length !== 0) {
            mail.inBox.id = mail.id;
            return mail.inBox;
          } else return {};
        }
      });
      mailData = res.filter((obj) => Object.keys(obj).length !== 0);
    }

    if (boxType == "sendbox") {
      let data = await chatModel.findAll({
        attributes: ["sendBox", "id"],
        where: { userMail: userMail },
        raw: true,
      });

      let res = data.map((mail) => {
        if (mail.sendBox != null) {
          if (Object.keys(mail.sendBox).length !== 0) {
            mail.sendBox.id = mail.id;
            return mail.sendBox;
          } else return {};
        }
      });
      mailData = res.filter((obj) => Object.keys(obj).length !== 0);
    }

    res.status(200).send(mailData);
  } catch (error) {
    console.error("Error getting data from the database:", error);
    res.status(500).send("Internal Server Error");
  }
};
