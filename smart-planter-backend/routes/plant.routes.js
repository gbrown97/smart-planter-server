module.exports = app => {
    const plants = require("../controllers/plant.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Plant
    router.post("/", plants.create);
  
    // Retrieve all Plants
    router.get("/", plants.findAll);

    // Refresh all Plants
    router.get("/refresh", plants.refresh);
  
    // Update a Plant with id
    router.put("/:id", plants.update);
  
    // Delete a Plant with id
    router.delete("/:id", plants.delete);
  
  
    app.use('/api/plants', router);
  };