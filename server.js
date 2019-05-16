const express = require("express");
const exphbs = require("express-handlebars");

//import router
const router = require("./controllers/burgers_controller");

//create server and set port
let app = express();
const PORT = process.env.PORT || 8080;

//add request-parsing middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//add handlebars templating engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//add router for GET, POST, PUT listeners
router(app);

//start the server
app.listen(PORT, function() {
    console.log("Server using PORT: " + PORT);
  });