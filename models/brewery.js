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
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        Brewery.belongsTo(models.User, {
          foreignKey: {
            allowNull: false
          }
        });
      };
    return Brewery;

    };

