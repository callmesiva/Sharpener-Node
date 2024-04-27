const express = require("express");
const router = express.Router();
const postData = require("../controller/postControl");

router.post("/expenselist/:userId", postData.expenseList);
router.post("/premium/:userId", postData.premium);

module.exports = router;
