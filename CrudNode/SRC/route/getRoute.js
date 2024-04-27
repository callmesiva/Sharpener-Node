const express = require("express");
const router = express.Router();
const getData = require("../controller/getControl");

router.get("/expenselist/:userId", getData.expense);
router.get("/premium/:userId", getData.premium);

module.exports = router;
