const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
const toDoRouter = require("./routes/toDoRoutes");
const AppError = require("./utils/appError");
const globalErrorHanlder = require("./controllers/errorController");
app.use("/api/v1/todos", toDoRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHanlder);

module.exports = app;
