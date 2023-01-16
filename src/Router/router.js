const router = require("express").Router();
const {
  getToDosController,
  createToDoController,
  updateToDoController,
  deleteToDoController,
  deleteCompletedToDosController,
} = require("../Controller/toDoController");
const { validate } = require("../validation/validate");
const { validateId } = require("../validation/validateId");
const { body } = require("express-validator");

router.get("/toDos", getToDosController);

router.post(
  "/create-toDo",
  body("toDoItem").isString(),
  validate,
  createToDoController
);

router.put("/update-toDo", validateId, updateToDoController);

router.delete("/delete-toDo", validateId, deleteToDoController);

router.delete("/delete-completed", deleteCompletedToDosController);

module.exports = { router };
