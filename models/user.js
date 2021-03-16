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

  // hasOne Crawl
  User.associate = function(models) {
      User.hasOne(models.Crawl,{ 
        foreignKey: "CrawlId",
        targetKey: "id"
      })
  }

  User.prototype.validPassword = function (password) {
      return bcrypt.compareSync(password, this.password);
  };
  
  User.addHook('beforeCreate', (user) => {
      user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });

  return User;
};