"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("users", {
      UserID: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      Email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Image: {
        type: Sequelize.STRING,
      },
      EmailVerified: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      Country: {
        type: Sequelize.STRING,
      },
      FullName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Nationality: {
        type: Sequelize.STRING,
      },
      Gender: {
        type: Sequelize.STRING,
      },
      Naturalized: {
        type: Sequelize.BOOLEAN,
      },
      Birthday: {
        type: Sequelize.DATE,
      },
      BirthPlace: {
        type: Sequelize.STRING,
      },
      BirthCountry: {
        type: Sequelize.STRING,
      },
      Height: {
        type: Sequelize.FLOAT,
      },
      MaritalStatus: {
        type: Sequelize.STRING,
      },
      Addr_HouseNo: {
        type: Sequelize.STRING,
      },
      Addr_Street: {
        type: Sequelize.STRING,
      },
      Addr_City: {
        type: Sequelize.STRING,
      },
      PostalCode: {
        type: Sequelize.STRING,
      },
      MobileNumber: {
        type: Sequelize.STRING,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("users");
  },
};
