const express = require("express");
const router = express.Router();
const deleteData = require("../controller/deleteControl");

router.delete("/expenselist/:userId/:id", deleteData.expense);

module.exports = router;
