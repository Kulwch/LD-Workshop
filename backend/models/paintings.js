'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Painting extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(_models) {
      // define association here
    }
  }
  Painting.init({
   
    title: DataTypes.STRING,
    text: DataTypes.STRING,
    paintingUrl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Painting',
  });
  return Painting;
};