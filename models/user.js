const bcrypt = require('bcryptjs');

module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      defaultValue: false,
      allowNull: false
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date_of_birth: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  User.prototype.validPassword = function (password) {
      return bcrypt.compareSync(password, this.password);
  };
  
  User.addHook('beforeCreate', (user) => {
      user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });

  User.associate = function(models) {
    User.hasMany(models.Brewery,{ 
      foreignKey: "UserId",
  })
}

  return User;
};