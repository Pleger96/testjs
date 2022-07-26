const appData = {};

const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require("cors");
app.use(cors());

app.use(express.static("./application"));

const port = 3000;

app.listen(port, () => {

    console.log("Server is running on http://localhost:" + port);

});