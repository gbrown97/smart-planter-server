const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:4200"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./smart-planter-backend/models");
db.sequelize.sync();

const spawn = require("child_process").spawn;
const pythonProcess = spawn("python",["./Everything.py"]);

// simple route
app.get("/", (req, res) => {
  // res.json({ message: "Starting smart-planter" });
  // const spawn = require("child_process").spawn;
  // const pythonProcess = spawn('python',["./Everything.py"]);
  pythonProcess.stdout.on('data', (data) => {
    // Do something with the data returned from python script
    res.write(data);
    res.end('end');
  });
});


require("./smart-planter-backend/routes/plant.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
