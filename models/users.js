module.exports = function (sequelize, DataTypes) {
  const Users = sequelize.define("Users", {
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
  Users.associate = function(models) {
      Users.hasOne(models.Crawl,{ 
        foreignKey: "CrawlId",
        targetKey: "id"
      })
    }

  return Users;
};