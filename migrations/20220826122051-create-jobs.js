module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable("jobs", {
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
      location: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: null
      },
      salary: {
        type: DataTypes.INTEGER,
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
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable("jobs");
  }
};
