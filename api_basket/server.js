const dotenv = require('dotenv').config()
const express = require('express')
const app = express()
const CORS = require('cors')
const routes = require('./routes/index')
const database = require('./database/index')
const ModelBasketAvailable = require('./database/modelBasket')

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(CORS())
app.use('/', routes)

database
    .authenticate(() => {
        console.log('Conexão feita com o banco de dados DISPONIVEIS')
    }).catch(msgError => {
        console.log(msgError)
    })



app.listen(2022, () => console.log('API funcionando corretamente'))