'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Drawing extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(_models) {
      // define association here
    }
  }
  Drawing.init({
   
    title: DataTypes.STRING,
    text: DataTypes.STRING,
    drawingUrl: DataTypes.STRING,
    category: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Drawing',
  });
  return Drawing;
};