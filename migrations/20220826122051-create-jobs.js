'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('jobs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue:null
      },
      location: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue:null
      },
      salary: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue:null
      },
      description: {
        type: Sequelize.TEXT,
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
    await queryInterface.dropTable('jobs');
  }
};