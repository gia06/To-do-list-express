const router = require("express").Router();
const { getToDosController, createToDoController, updateToDoController } = require("../Controller/toDoController");
const { validate } = require('../validation/validate')
const { body } = require('express-validator');

router.get("/", (req, res) => {
  // this one is for testing purposes only
  res.send("hello there");
});

router.get("/toDos", getToDosController);

router.post("/create-toDo", body("toDoItem").isString(), validate, createToDoController);

router.put("/update-toDo", updateToDoController)

module.exports = { router };
