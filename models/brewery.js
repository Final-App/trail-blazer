module.exports = function(sequelize, DataTypes) {
    var Brewery = sequelize.define('Brewery', {
        Name: {
            type: DataTypes.STRING,
            notEmpty: true,
        
        },
        Street: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Postal_Code:{
            type: DataTypes.STRING,
            allowNull: false
        } 

        
    });

   Brewery.associate = function(models) {
        Brewery.belongsTo(models.User, {
            foreignKey: {
              allowNull: false
            }
          });
        };
    return Brewery;
}