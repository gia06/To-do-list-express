const router = require("express").Router();
const {
  getToDosController,
  createToDoController,
  updateToDoController,
  deleteToDoController,
  deleteCompletedToDosController,
} = require("../Controller/toDoController");
const { validate } = require("../Validation/validate");
const { validateId } = require("../Validation/validateId");
const { body } = require("express-validator");

/**
 * @swagger
 * components:
 *   schemas:
 *     toDoItem:
 *       type: object
 *       required:
 *         - toDoItem
 *         - itemStatus
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the toDo item
 *         toDoItem:
 *           type: string
 *           description: the content of the toDo item
 *         itemStatus:
 *           type: string
 *           description: status of the toDo item
 *       example:
 *         id: 63c550acbc503a0f6c0d7b29
 *         toDoItem: Getting up at 8am
 *         itemStatus: active
 */

/**
 * @swagger
 * tags:
 *   name: To-do Items
 *   description: The to-do items managing API
 */

/**
 * @swagger
 * /toDos:
 *   get:
 *     summary: Returns the list of all the to-do items
 *     tags: [To-do Items]
 *     responses:
 *       200:
 *         description: The list of the to-do items
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/toDoItem'
 */

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
