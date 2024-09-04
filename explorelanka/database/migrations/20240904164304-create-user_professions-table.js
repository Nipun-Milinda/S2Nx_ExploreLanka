"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("user_professions", {
      UserProfessionID: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      Employer: {
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
      Location: {
        type: Sequelize.STRING,
      },
      Fax: {
        type: Sequelize.STRING,
      },
      Email: {
        type: Sequelize.STRING,
      },
      UserID: {
        type: Sequelize.STRING,
        references: {
          model: "users",
          key: "UserID",
        },
      },
      VisaApplicationID: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("user_professions");
  },
};
