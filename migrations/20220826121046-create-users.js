module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable("users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: null
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: null
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: null,
        unique: true
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: null,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: null
      },
      type: {
        type: DataTypes.STRING,
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
    await queryInterface.dropTable("users");
  }
};
