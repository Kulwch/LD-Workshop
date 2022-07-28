'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Contact extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(_models) {
      // define association here
    }
  }
  Contact.init({
  
    text: {
      type: DataTypes.TEXT,
      required: true
    },
    firstName: {
      type: DataTypes.STRING,
      required: true
    },
    lastName: {
      type: DataTypes.STRING,
      required: true
    },
    email: {
      type: DataTypes.STRING,
      required: true
    },
    phone: {
      type: DataTypes.STRING,
      is: /^(0|\+33 )[1-9]([-. ]?\d{2} ){3}([-. ]?\d{2})$/,
    }
  }, {
    sequelize,
    modelName: 'Contact',
    paranoid: true
  });
  return Contact;
};