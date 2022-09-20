module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable("user_jobs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: null
      },
      jobId: {
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
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable("user_jobs");
  }
};
