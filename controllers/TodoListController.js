const {Todo} = require("../models")

class TodoController {

    static findAll = async (req, res, next) => {
        try {
            const Todos = await Todos.findAll();

            res.status(200).json({data: Todos})
        } catch(err) {
            next(err)
        }
    }

    static findOne = async (req, res, next) => {
        try {
            const {id} = req.params;
            
            const Todos = await Todos.findOne({
                where: {
                    id
                }
            })

            if(!Todos) {
                throw {name: "ErrorNotFound"}
            }

            res.status(200).json({data: Todos})
        } catch(err) {
            next(err)
        }
    }

    static create = async (req, res, next) => {
        try {
            const {title} = req.body;

            const createdTodo = await Todo.create({
                title
            }, {returning: true})

            res.status(201).json({
                message: "Todo created successfully",
                data: createdTodo
            })
        } catch(err) {
            next(err)
        }
    }

    static update = async (req, res, next) => {
        try {
            const {title} = req.body;
            const {id} = req.params;

            const foundTodo = await Todo.findOne({
                where: {
                    id
                }
            })

            if(!foundTodo) {
                throw {name: "ErrorNotFound"}
            } 

            await foundTodo.update({
                title: title || foundTodo.title
            })

            res.status(200).json({
                message: "Todo updated successfully",
                data: foundGame
            })
        } catch(err) {
            next(err)
        }
    }

    static destroy = async (req, res, next) => {
        try {
            const {id} = req.params;

            const foundTodo = await Todo.findOne({
                where: {
                    id
                }
            })

            if(!foundTodo) {
                throw {name: "ErrorNotFound"}
            }

            await foundTodo.destroy();

            res.status(200).json({
                message: "Todo deleted successfully"
            })
        } catch(err) {
            next(err)
        }
    }

}

module.exports = TodoController;