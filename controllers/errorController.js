const AppError = require("../utils/appError");

const handleCastErrorDB = (err) => {
  const message = `Invalid  ${err.value}.`;
  return new AppError(message, 400);
};

const handleDuplicateFieldsDB = (err) => {
  const message = `Existed value`;
  return new AppError(message, 400);
};

const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    stack: err.stack,
    error: err,
  });
};

const sendErrorPro = (err, res) => {
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else {
    res.status(500).json({
      status: "error",
      message: "Something went very wrong!",
    });
  }
};

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  let error = {...err};
  console.log(error);
  if (error.name === "CastError") error = handleCastErrorDB(error);

  if (error.code === 11000) error = handleDuplicateFieldsDB(error);

  sendErrorDev(error, res);
};
