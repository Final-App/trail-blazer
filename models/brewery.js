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


    return Brewery;

    };

