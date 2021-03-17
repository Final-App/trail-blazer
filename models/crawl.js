module.exports = function (sequelize, DataTypes) {
    const Crawl = sequelize.define("Crawl", {
      crawlName: {
        type: DataTypes.STRING,
        allowNull: false,
      }

    });
  
    // belongsTo User
    Crawl.associate = function(models) {
      Crawl.belongsTo(models.Users,{ 
        foreignKey: "id",
      })
    }

  

    // };

    
    return Crawl;
  };