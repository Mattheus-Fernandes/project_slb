const Sequelize = require('sequelize')


const basketAvailable = new Sequelize('railway', 'root', 'uLjPGLwoUnrTlIJT1AMe', {
    host: process.env.DATABASE_URL,
    dialect: 'mysql',
    port: 7161
})


module.exports = basketAvailable