const ToDo = require("../models/toDoModel");

exports.getAllToDo = async (req, res) => {
  try {
    const todos = await ToDo.find();
    res.status(200).json({
      status: "success",
      results: todos.length,
      data: todos,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error,
    });
  }
};

exports.createToDo = async (req, res) => {
  try {
    const newToDo = await ToDo.create(req.body);
    res.status(201).json({
      status: "success",
      data: newToDo,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.mess,
    });
  }
};

exports.updateToDo = async (req, res) => {
  try {
    const tour = await ToDo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        tour,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error,
    });
  }
};

exports.deleteToDo = async (req, res) => {
  try {
    await ToDo.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: "success",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error,
    });
  }
};
