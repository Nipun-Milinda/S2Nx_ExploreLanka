"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("user_spouses", {
      UserSpouseID: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      Sp_FullName: {
        type: Sequelize.STRING,
      },
      Sp_Nationality: {
        type: Sequelize.STRING,
      },
      Sp_HouseNo: {
        type: Sequelize.STRING,
      },
      Sp_Street: {
        type: Sequelize.STRING,
      },
      Sp_City: {
        type: Sequelize.STRING,
      },
      Sp_PassportNo: {
        type: Sequelize.STRING,
      },
      Sp_DateOfExpiry: {
        type: Sequelize.DATE,
      },
      UserID: {
        type: Sequelize.UUID,
        references: {
          model: "users",
          key: "UserID",
        },
      },
      VisaApplicationID: {
        type: Sequelize.UUID,
        references: {
          model: "visa_applications",
          key: "VisaApplicationID",
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
    await queryInterface.dropTable("user_spouses");
  },
};
