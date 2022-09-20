const {
  Model
} = require("sequelize");
// const db = require('./index')
// db.user = require("./User");
module.exports = (sequelize, DataTypes) => {
  class Job extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // db.Job.belongsToMany(db.user, {through:"UserJob"})
    }
  }
  Job.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null
    },
    salary: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null
    },
    companyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null
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
    modelName: "Job",
    tableName: "jobs"
  });
  return Job;
};
