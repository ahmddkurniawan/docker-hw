const express = require("express")
const router = express.Router();
const TodoController = require("../controllers/TodoListController.js");

router.get("/Todo", TodoController.findAll);
router.get("/Todo/:id", TodoController.findOne);
router.post("/Todo", TodoController.create);
router.put("/Todo/:id", TodoController.update);
router.delete("/Todo/:id", TodoController.destroy);

module.exports = router;