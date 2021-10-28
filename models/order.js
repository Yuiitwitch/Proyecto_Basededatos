'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.movie,{
        foreignKey:'movieId'
      });
      this.belongsTo(models.usuario,{
        foreignKey:'usuarioId'
      });
    }
  };
  order.init({
    returnDate: DataTypes.INTEGER,
    rentalDate: DataTypes.INTEGER,
    usuarioId: DataTypes.INTEGER,
    movieId: DataTypes.INTEGER,
    city: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'order',
  });
  return order;
};