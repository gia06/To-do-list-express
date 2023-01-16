const { toDoModel } = require("../Schema/toDoSchema");

const getToDos = async () => {
  return (toDos = await toDoModel.find());
};

const createTodo = async ({ toDoItem }) => {
  toDoModel.create({
    toDoItem: toDoItem,
    itemStatus: "active",
    isDeleted: false,
  });
};

const updateToDo = async ({ id }) => {
  const item = await toDoModel.findOne({ _id: id });

  if (item.itemStatus === "active") {
    await item.update({ itemStatus: "completed" });
  } else {
    await item.update({ itemStatus: "active" });
  }
};

const deleteTodo = async ({ id }) => {
  const deleted = await toDoModel.findOneAndDelete({ _id: id });
};

const deleteCompletedToDos = async () => {
  await toDoModel.deleteMany({ itemStatus: "completed" });
};

module.exports = {
  getToDos,
  createTodo,
  updateToDo,
  deleteTodo,
  deleteCompletedToDos,
};
