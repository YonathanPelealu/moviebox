'use strict';
const {
  Model
} = require('sequelize');
const { encryptPwd } = require('../helpers/bcrypt');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  users.init({
    fullname: {
      type: DataTypes.STRING,
      validate: {
          notEmpty: {
              msg: "Full Name must be filled!"
          }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
          notEmpty: {
              msg: "Email must be filled!"
          },
          isEmail : {
            msg : "Input email format please!"
          }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
          notEmpty: {
              msg: "Password must be filled!"
          }
      }
    },
    image: {
      type: DataTypes.STRING
    },
    role: {
      type: DataTypes.STRING,
      // defaultValue: "user"
    }
  }, {
    hooks: {
      beforeCreate(user) {
        user.role = "user"
        user.password = encryptPwd(user.password)
      }
   }, 
    sequelize,
    modelName: 'users',
  });
  return users;
};