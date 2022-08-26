'use strict';
const {
  Model
} = require('sequelize');
const db = require('./index');
db.job = require("./Job");
db.company = require('./Company')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      db.user.belongsToMany(db.job, {through:"UserJob"})
      db.user.hasMany(db.company, {forgenKey:"id"})
    }
  }
  User.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue:null
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue:null
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue:null,
      unique: true
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue:null,
      unique: true
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue:null
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: new Date()
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: new Date()
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};