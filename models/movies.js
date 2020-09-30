'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class movies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  movies.init({
    title: DataTypes.STRING,
    synopsis: DataTypes.STRING,
    trailer: DataTypes.STRING,
    poster: DataTypes.STRING,
    category: DataTypes.STRING,
    release_date: DataTypes.STRING,
    director: DataTypes.STRING,
    featured_song: DataTypes.STRING,
    budget: DataTypes.INTEGER,

  }, {
    sequelize,
    modelName: 'movies',
  });
  return movies;
};