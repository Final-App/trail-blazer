module.exports = function (sequelize, DataTypes) {
    var Crawl = sequelize.define("Crawl", {
      crawlName: {
        type: DataTypes.STRING,
        allowNull: false,
      }

    });
  
    // belongsTo User
    Crawl.associate = function(models) {
      Crawl.belongsTo(models.User,{ 
        foreignKey: "UserId",
      })
    }

  

    // };

    
    return Crawl;
  };