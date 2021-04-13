module.exports = (sequelize, Sequelize) => {
    const Plant = sequelize.define("plants", {
      name: {
        type: Sequelize.STRING
      },
      minMoisture: {
        type: Sequelize.DOUBLE
      },
      maxMoisture: {
        type: Sequelize.DOUBLE
      },
      currentMoisture: {
          type: Sequelize.DOUBLE
      },
      minTemperature: {
        type: Sequelize.DOUBLE
      },
      maxTemperature: {
        type: Sequelize.DOUBLE
      },
      currentTemperature: {
          type: Sequelize.DOUBLE
      },
      sunlightLevel: {
        type: Sequelize.STRING
      },
      currentSunlightLevel: {
          type: Sequelize.DOUBLE
      }
    });
  
    return Plant;
  };