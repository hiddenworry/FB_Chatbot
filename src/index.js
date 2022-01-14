import express from "express";
import viewEngine from "./config/viewEngines";
import initWebRouter from  "./routes/web";
import bodyParser from "body-parser";
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
    console.log("Server started.......");
  });

console.log(process.env.VERIFY_TOKEN)