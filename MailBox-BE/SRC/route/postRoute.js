const express = require("express");
const router = express.Router();
const postData = require("../controller/postControl");

router.post("/mailinfo", postData.mailInfo);

module.exports = router;
