"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("user_professions", {
      UserProfessionID: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
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
    await queryInterface.dropTable("user_professions");
  },
};
