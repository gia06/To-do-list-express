const { toDoModel } = require("../Schema/toDoSchema");

const getToDos = async () => {
  return (toDos = await toDoModel.find());
};

const createTodo = async (item) => {
  toDoModel.create({
    toDoItem: item,
    itemStatus: "active",
    isDeleted: false,
  });
};

const updateToDo = async (id, itemStatus) => {
  return await toDoModel.findOneAndUpdate(
    { _id: id },
    { itemStatus: itemStatus }
  );
};

module.exports = { getToDos, createTodo, updateToDo };
