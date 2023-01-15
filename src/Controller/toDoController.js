const logger = require("../Log/pino");
const { getToDos, createTodo, updateToDo } = require("../Service/toDoService");

const getToDosController = async (req, res) => {
  
  res.status(200).json(...(await getToDos()));
};

const createToDoController = async (req, res) => {
    await createTodo(req.body.toDoItem)
    res.status(201).json({result: 'item created'})
    console.log(req.body.toDoItem)
};

const updateToDoController = async (req, res) => {
    await updateToDo(req.body.id, req.body.itemStatus)
    res.status(200).json({result: 'item updated'})
}

module.exports = { getToDosController, createToDoController, updateToDoController };
