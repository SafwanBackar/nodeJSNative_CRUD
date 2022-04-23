const { rejects } = require('assert')
const { resolve } = require('path')
const { createBrotliDecompress } = require('zlib')
const data = require('/.data')

class Controller {

    async getTodos() {
        return new Promise((resolve, _) => resolve(data))
    }

    async getTodo(id) {
        return new Promise((resolve, reject) => {
            let todo = data.find((todo) => todo.id === parseInt(id));
            if (todo) {
                resolve(todo)
            } else {
                reject(`Todo with id ${id} not found`)
            }
        })
    }


    async createTodo() {
        return new Promise((resolve, _) => {
            let newoTodo = {
                id: Math.floor(4 + Math.random() * 10),
                ...todo,
            };
            resolve(newoTodo)
        });
    }

    async updateTodo(id) {
        return new Promise((resolve, reject) => {
            let todo = data.find((todo) => todo.id === parseInt(id));
            if (!todo) {
                reject(`No todo with id ${id} found`)
            }

            todo['completed'] = true
            resolve(todo)

        })
    }

    async deleteTodo(id) {
        return new Promise((resolve, reject) => {
            let todo = data.find((todo) => todo.id === parseInt(id));
            if (!todo) {
                reject(`No todo with the id ${id}`)
            }
            resolve('Todo deleted successfully')
        })
    }
}

module.exports = Controller;