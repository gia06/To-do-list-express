const logger = require("../Log/pino");
const {
  getToDos,
  createTodo,
  updateToDo,
  deleteTodo,
  deleteCompletedToDos,
} = require("../Service/toDoService");

const getToDosController = async (req, res) => {
  res.status(200).json(...(await getToDos()));
};

const createToDoController = async (req, res) => {
  await createTodo(req.body);
  res.status(201).json({ result: "item created" });
};

const updateToDoController = async (req, res) => {
  await updateToDo(req.body);
  res.status(200).json({ result: "item updated" });
};

const deleteToDoController = async (req, res) => {
  await deleteTodo(req.body);
  res.status(204).json({ result: "item deleted" });
};

const deleteCompletedToDosController = async (req, res, next) => {
  await deleteCompletedToDos();
  res.status(204).json({ result: "items deleted" });
};

module.exports = {
  getToDosController,
  createToDoController,
  updateToDoController,
  deleteToDoController,
  deleteCompletedToDosController,
};
