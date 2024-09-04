"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("invoices", {
      InvoiceID: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      Amount: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      InvoiceDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      PaymentType: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      PaymentStatus: {
        type: Sequelize.STRING,
        allowNull: false,
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
      VisaApplicationID: {
        type: Sequelize.STRING,
        references: {
          model: "visa_applications",
          key: "VisaApplicationID",
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
    await queryInterface.dropTable("invoices");
  },
};
