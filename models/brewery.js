module.exports = function (sequelize, DataTypes) {
    var Brewery = sequelize.define('Brewery', {
        Name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        Street: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Postal_Code: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Brewery.associate = function(models) {
        Brewery.hasMany(models.Crawl,{ 
          foreignKey: "BreweryId",
        })
    }

    return Brewery;

    };

