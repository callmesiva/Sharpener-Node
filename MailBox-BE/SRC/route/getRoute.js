const express = require("express");
const router = express.Router();
const getData = require("../controller/getControl");

router.get("/mailinfo/:boxType/:userMail", getData.mailInfo);

module.exports = router;
