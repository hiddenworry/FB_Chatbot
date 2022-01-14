"use strict";

var _express = _interopRequireDefault(require("express"));

var _viewEngines = _interopRequireDefault(require("./config/viewEngines"));

var _web = _interopRequireDefault(require("./routes/web"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require("dotenv").config();

let app = (0, _express.default)(); //config view engines

(0, _viewEngines.default)(app); //parser request to json

app.use(_bodyParser.default.json());
app.use(_bodyParser.default.urlencoded({
  extended: true
})); // init web route

(0, _web.default)(app);
let port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("Bot running at " + port);
});