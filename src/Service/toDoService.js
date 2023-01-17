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
    await item.updateOne({ itemStatus: "completed" });
  } else {
    await item.updateOne({ itemStatus: "active" });
  }
};

//  ! TODO  correct returning 204 always
const deleteTodo = async ({ id }) => {
  const item = await toDoModel.findOne({ _id: id });
  const deleted = await item.delete({ _id: id });
};

//  ! TODO  correct returning 204 always
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
