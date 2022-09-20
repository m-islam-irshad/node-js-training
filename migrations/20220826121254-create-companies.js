module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable("companies", {
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
        type: DataTypes.TEXT,
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
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable("companies");
  }
};
