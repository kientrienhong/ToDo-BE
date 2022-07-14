const express = require("express");
const {
  getAllToDo,
  updateToDo,
  deleteToDo,
  createToDo,
} = require("../controllers/toDoController");
const route = express.Router();

route.route("/").get(getAllToDo).post(createToDo);

route.route("/:id").patch(updateToDo).delete(deleteToDo);

module.exports = route;
