module.exports = function (sequelize, DataTypes) {
    const Brewery = sequelize.define('Brewery', {
        name: {
            type: DataTypes.STRING,
            allowNull: true,

        },
        street: {
            type: DataTypes.STRING,
            allowNull: false
        },
        postalCode: {
            type: DataTypes.STRING,
            allowNull: false
        }


    });

    // belongsToMany Crawl

    
    return Brewery;

    };

