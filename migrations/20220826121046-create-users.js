'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue:null
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue:null
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue:null,
        unique: true
      },
      phoneNumber: {
        type: Sequelize.STRING,
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
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};