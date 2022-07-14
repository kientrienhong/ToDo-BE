const express = require("express");

const app = express();
app.use(express.json());
const toDoRouter = require("./routes/toDoRoutes");

app.use("/api/v1/todos", toDoRouter);

module.exports = app;
