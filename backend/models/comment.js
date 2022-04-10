'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Comment.init({
  
    text: {
      type: DataTypes.TEXT,
      required: true
    },
    authorFirstName: {
      type: DataTypes.STRING,
      required: true
    },
    authorLastName: {
      type: DataTypes.STRING,
      required: true
    },
    authorEmail: {
      type: DataTypes.STRING,
      required: true
    }
  }, {
    sequelize,
    modelName: 'Comment',
    paranoid: true
  });
  return Comment;
};