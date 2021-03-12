module.exports = function (sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    Email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
    }
    },
    Password: {
      type: DataTypes.STRING,
      defaultValue: false,
      allowNull: false
    },
    First_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Date_of_birth: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return Users;
};