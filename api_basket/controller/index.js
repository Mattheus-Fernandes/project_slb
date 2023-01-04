const ModelBasketAvailable = require('../database/modelBasket')

async function getBasket (req, res) {

    const basketAvailable = await ModelBasketAvailable.findAll({raw: true})
   
    
    const baskets = {
        basketAvailable
    
    }

    res.json(baskets)
    
    
}

function postBasket(req, res) {
    const serialNumber = req.body.serial_number.toUpperCase()
    const basketState = req.body.basketState.toLowerCase()
    
        ModelBasketAvailable.create({
            basket: serialNumber,
            basketState: basketState
        }).then(()=> res.redirect('https://front-project-slb.onrender.com/'))
    
}

function deleteBasket(req, res) {
    const id = req.params.id
    

    ModelBasketAvailable.destroy({
        where: {
            id: id
        }
    })

}

async function updateBasket(req, res) {
    const id = req.params.id

    const basket = await ModelBasketAvailable.findOne({
        where: {
            id
        }
    })


    const toggle = basket.basketState === 'y' ? 'n' : 'y'

    basket.update({basketState: toggle})

}

module.exports = {
    getBasket,
    postBasket,
    deleteBasket,
    updateBasket
}
