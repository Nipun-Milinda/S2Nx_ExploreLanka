"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("user_contacts", {
      UserContactID: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      Emg_Name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Emg_MobileNumber: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Emg_Relationship: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Emg_HouseNo: {
        type: Sequelize.STRING,
      },
      Emg_Street: {
        type: Sequelize.STRING,
      },
      Emg_City: {
        type: Sequelize.STRING,
      },
      Type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      VisaApplicationID: {
        type: Sequelize.STRING,
        references: {
          model: "visa_applications",
          key: "VisaApplicationID",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      UserID: {
        type: Sequelize.STRING,
        references: {
          model: "users",
          key: "UserID",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
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
    await queryInterface.dropTable("user_contacts");
  },
};
