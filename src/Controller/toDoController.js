const logger = require('../Log/pino')

const getList = (req, res) => {
    res.send('here are todo list')
}

module.exports =  getList 