const ToDo = require("../models/toDoModel");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

exports.getAllToDo = catchAsync(async (req, res) => {
  const todos = await ToDo.find();
  res.status(200).json({
    status: "success",
    results: todos.length,
    data: todos,
  });
});

exports.createToDo = catchAsync(async (req, res) => {
  const newToDo = await ToDo.create(req.body);
  res.status(201).json({
    status: "success",
    data: newToDo,
  });
});

exports.updateToDo = catchAsync(async (req, res) => {
  const tour = await ToDo.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!tour) {
    return next(new AppError("Todo not found", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      tour,
    },
  });
});

exports.deleteToDo = catchAsync(async (req, res) => {
  const tour = await ToDo.findByIdAndDelete(req.params.id);

  if (!tour) {
    return next(new AppError("Todo not found", 404));
  }

  res.status(204).json({
    status: "success",
  });
});
