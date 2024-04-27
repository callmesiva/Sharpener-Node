const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./dbConfig");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const postData = require("./SRC/route/postRoute");
const getData = require("./SRC/route/getRoute");
const deleteData = require("./SRC/route/deleteRoute");

app.use("/", postData, getData, deleteData);

app.listen(3800);
