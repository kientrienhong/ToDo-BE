const mongoose = require("mongoose");

const toDoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A to do must have a name"],
    unique: true,
  },
  isDone: {type: Boolean, default: false},
});

const ToDo = mongoose.model("ToDo", toDoSchema);

module.exports = ToDo;
