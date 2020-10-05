'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class reviews extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  reviews.init({
    user_id:  {
      type: DataTypes.STRING,
      validate: {
          notEmpty: {
              msg: "User Id must be filled!"
          }
      }
    },
    movie_id:  {
      type: DataTypes.STRING,
      validate: {
          notEmpty: {
              msg: "Movie Id must be filled!"
          }
      }
    },
    review: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'reviews',
  });
  return reviews;
};