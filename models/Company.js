const {
  Model
} = require("sequelize");
// const db = require('./index');
// db.job = require("./Job");
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Company.hasMany(models.Job, { foreignKey: "companyId" });
    }
  }
  Company.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    companyName: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null
    },
    aboutCompany: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null
    },
    userId: {
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
    modelName: "Company",
    tableName: "companies"
  });
  return Company;
};
