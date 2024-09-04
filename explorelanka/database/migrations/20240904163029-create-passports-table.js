"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("passports", {
      PassportID: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      PassportNo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      PlaceOfIssue: {
        type: Sequelize.STRING,
      },
      DateOfIssue: {
        type: Sequelize.DATE,
      },
      DateOfExpiry: {
        type: Sequelize.DATE,
      },
      PassportURL: {
        type: Sequelize.STRING,
      },
      CurrentPassport: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      UserID: {
        type: Sequelize.STRING,
        references: {
          model: "users",
          key: "UserID",
        },
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
    await queryInterface.dropTable("passports");
  },
};
