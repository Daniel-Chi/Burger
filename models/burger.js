//import MySQL query functions from orm file
const orm = require("../config/orm");

//create and export Burger model for MySQL queries
const Burger = {
    selectAll: function (callback) {
        orm.selectAll("burgers", callback);
    },
    insertOne: function (burgerName, callback) {
        orm.insertOne("burgers", "burger_name", burgerName, callback);
    },
    updateOne: function (id, callback) {
        orm.updateOne("burgers", "devoured", true, "id", id, callback);
    },
    deleteOne: function (id, callback) {
        orm.deleteOne("burgers", "id", id, callback)
    }
};
module.exports = Burger;