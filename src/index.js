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

let port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log("Bot running at " + port);
})

console.log(process.env.VERIFY_TOKEN)