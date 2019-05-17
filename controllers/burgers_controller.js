//import Burger model for MySQL queries
const Burger = require("../models/burger");

//create router with GET, POST, and PUT method listeners
const router = function(app) {
    //GET method to send display of all burgers
    app.get("/", function(req, res){
        Burger.selectAll(function(data){
            res.render("index", {burgers: data});
        });
    });
    //POST method to insert new burger into database
    app.post("/api/burgers", function(req, res){
        Burger.insertOne(req.body.name, function(data){
            res.send(data);
        });
    });
    //PUT method to update devoured status of a burger
    app.put("/api/burgers/:id", function(req, res){
        Burger.updateOne(req.params.id, function(data){
            res.send(data);
        });
    });
}
//export router
module.exports = router;