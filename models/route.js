module.exports = function (sequelize, DataTypes) {
    var Route = sequelize.define("Route", {
      routeItem: DataTypes.STRING,
    });
  
    Route.associate = function (models) {
      Route.hasMany(models.Users, {
  
      });
    };
    
    return Route;
  };