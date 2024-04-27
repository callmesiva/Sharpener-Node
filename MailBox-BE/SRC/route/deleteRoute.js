const express = require("express");
const router = express.Router();
const deleteData = require("../controller/deleteControl");

router.delete("/mailinfo/:id", deleteData.mailInfo);

module.exports = router;
