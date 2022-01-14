const express =  require("express");
const viewEngine = require("./config/viewEngines");
const initWebRouter = require("./routes/web");
const bodyParser = require ("body-parser");
require("dotenv").config();



let app = express();
//config view engines
viewEngine(app);

//parser request to json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

// init web route
initWebRouter(app);

const host = '0.0.0.0';
const port = process.env.PORT || 3000;
app.listen(port, host, function() {
    console.log("Server started......." + port);
  });

console.log(process.env.VERIFY_TOKEN)