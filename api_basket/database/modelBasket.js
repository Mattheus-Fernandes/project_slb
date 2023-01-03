const Sequelize = require('sequelize')
const database = require('./index')


const ModelAvailable = database.define('basket', {
    basket: {
        type: Sequelize.STRING,
        allowNull: false
    },

    basketState: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

ModelAvailable.sync({force: true})

module.exports = ModelAvailable
