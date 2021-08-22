const { Pizza } = require('../models');

//the functions go here as methods
const pizzaController = {

    //get all pizzas
    getAllPizza(req,res) {
        Pizza.find({})
        .then(dbPizzaData => res.json(dbPizzaData))
        .catch(err =>{
            console.log(err)
            res.status(400).json(err)
        })
    },    
    //get one pizza by id
    getPizzaById ({params }, res) {
        Pizza.findOne({_id: params.id})
            .then(dbPizzaData => {
                if(!dbPizzaData) {
                    res.status(400).json({message: 'pizza not found'})
                }
                else {
                    res.json(dbPizzaData)
                }
            })
            .catch(err => {
                console.log(err)
                res.status(400).json(err)
                return;
            })
    },

    //craete pizza 

    createPizza ({body},res) {
        Pizza.create(body)
        .then(dbPizzaData => res.json(dbPizzaData))
        .catch(err => {
            console.log(err)
            res.status(400).json(err)
        })
    },

    updatePizza ({ params, body}, res) {
        Pizza.findOneAndUpdate({_id: params.id},body, {new: true}) // By setting the parameter to true, we're instructing Mongoose to return the new version of the document.
        .then(dbPizzaData => {
            if(!dbPizzaData) {
                res.status(404).json({message:'no pizza with this id'})
            }
            else {
                res.json(dbPizzaData)
            }
        })
        .catch(err => {
            console.log(err)
            res.status(400).json(err)
        })
    },

    deletePizza ({params}, res) {
        Pizza.deleteOne({_id:params.id})
        .then(dbPizzaData => {
            if (!dbPizzaData) {
                res.status(404).json({message:'no pizza with this id'})
            }
            else {
                res.json({message:'pizza deleted'})
            }
        })
        .catch(err => {
            console.log(err)
            res.status(400).json(err)
        })
    }

}

module.exports = pizzaController

asdfasdf