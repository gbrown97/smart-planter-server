const db = require("../models");
const Plant = db.plants;
const Op = db.Sequelize.Op;

// Create and Save a new Plant
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a Plant
    const plant = {
      name: req.body.name,
      minMoisture: req.body.minMoisture,
      maxMoisture: req.body.maxMoisture,
      currentMoisture: req.body.currentMoisture,
      minTemperature: req.body.minTemperature,
      maxTemperature: req.body.maxTemperature,
      currentTemperature: req.body.currentTemperature,
      sunlightLevel: req.body.sunlightLevel,
      currentSunlightLevel: req.body.currentSunlightLevel,
    };
  
    console.log(plant);
    // Save Plant in the database
    Plant.create(plant)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Plant."
        });
      });
  };

// Retrieve all Plants from the database.
exports.findAll = (req, res) => {
  
};

// Update a Plant by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Plant with the specified id in the request
exports.delete = (req, res) => {
  
};
