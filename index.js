const express =require('express');
const app = express();
require("./DBConf/dbConfig");
const argosRoutes = require("./routes/argosController");
const bodyParser = require("body-parser");
// setting up ejs engine
app.set('view engine', 'ejs');
app.set("views","./views");

//middleware
app.use(bodyParser.urlencoded({extended: true}))

app.use(bodyParser.json())


//app.engine('html', require("ejs").renderFile);

// folder structure
app.use("/public" ,express.static("public"));

app.use("/",argosRoutes);
app.listen(5500,() => console.log('server démarré 5500'));