const { DataTypes, Model, json, JSON } = require("sequelize");
const { sequelize, Sequelize } = require("../dbConfig");

class ChatModel extends Model {}

ChatModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    userMail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    to: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    from: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    inBox: {
      type: JSON,
      allowNull: true,
    },
    sendBox: {
      type: JSON,
      allowNull: true,
    },
  },
  {
    sequelize, // pass the instance to the init method
    tableName: "chatList",
    timestamps: true,
  }
);

(async () => {
  try {
    await ChatModel.sync({ force: false });
  } catch (error) {
    console.log("Error synchronizing State table: " + error);
  }
})();

module.exports = ChatModel;
