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
  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Plant.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving plants."
      });
    });
};

// Update a Plant by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Plant with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Plant.destroy({
    where: { name: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Plant was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Plant with id=${id}. Maybe Plant was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Plant with id=" + id
      });
    });
};
