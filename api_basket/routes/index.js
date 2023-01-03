const route = require('express').Router()
const controller = require('../controller/index')

route.get('/basket', controller.getBasket)
route.post('/basket', controller.postBasket)
route.delete('/basket/:id', controller.deleteBasket)
route.patch('/basket/:id', controller.updateBasket)




module.exports = route