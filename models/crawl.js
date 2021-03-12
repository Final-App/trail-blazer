module.exports = function (sequelize, DataTypes) {
    var Crawl = sequelize.define("Crawl", {
      CrawlName: DataTypes.STRING,
      notEmpty: true,

    });
  
    Crawl.associate = function (models) {
      Crawl.belongsTo(models.Users, {
        foreignKey: {
          allowNull: false
        },
      });
      Crawl.hasMany(models.Brewery,{
          
      })
      Crawl.belongsTo(models.Brewery,{
        foreignKey: "BreweryId",
        targetKey: "id"
      })

    };

    
    return Crawl;
  };