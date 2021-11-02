'use strict';
const { Model } = require('sequelize');
// const movie = require('./movie');
module.exports = (sequelize, DataTypes) => {
  class movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.order, {
        foreignKey: 'movieId'
      });
    }
  };
  movie.init({
    name: DataTypes.STRING,
    gender: DataTypes.STRING,
    actor: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'movie',
  });
  return movie;
};