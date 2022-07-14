const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
const toDoRouter = require("./routes/toDoRoutes");

app.use("/api/v1/todos", toDoRouter);

module.exports = app;
