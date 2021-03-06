const router =  require ('express').Router()
const { getAllPizza,
    getPizzaById,
    createPizza,
    updatePizza,
    deletePizza} = require('../../controllers/pizza-controller')

//set up get and all POST at api/pizzas
router
.route('/')
.get(getAllPizza)
.post(createPizza)

//set up get ONE and PUT and delete api/pizzas/:id
router
    .route('/:id')
    .get(getPizzaById)
    .put(updatePizza)
    .delete(deletePizza)


module.exports = router