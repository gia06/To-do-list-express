const router = require('express').Router()
const getToDos = require('../Controller/toDoController')

router.get('/', (req, res) => {  // this one is for testing purposes only
    res.send('hello there')
})

router.get('/todos', getToDos)


module.exports = { router }