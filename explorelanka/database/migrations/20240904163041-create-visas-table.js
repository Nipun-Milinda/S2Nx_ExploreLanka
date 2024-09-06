"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("visas", {
      VisaID: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      VisaType: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      CountryOfIssue: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      VisaNumber: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      PassportNumber: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      HoldersName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Nationality: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      DateOfIssue: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      ExpirationDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      EntryType: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      PurposeOfVisit: {
        type: Sequelize.STRING,
      },
      StayDuration: {
        type: Sequelize.STRING,
      },
      IssuedBy: {
        type: Sequelize.STRING,
      },
      VisaStatus: {
        type: Sequelize.STRING,
      },
      Remarks: {
        type: Sequelize.TEXT,
      },
      HoldersPhoneNumber: {
        type: Sequelize.STRING,
      },
      HoldersEmail: {
        type: Sequelize.STRING,
      },
      DateOfEntry: {
        type: Sequelize.DATE,
      },
      DateOfExit: {
        type: Sequelize.DATE,
      },
      VisaFee: {
        type: Sequelize.FLOAT,
      },
      Fingerprint: {
        type: Sequelize.STRING,
      },
      Photo: {
        type: Sequelize.STRING,
      },
      VisaApplicationID: {
        type: Sequelize.UUID,
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
    await queryInterface.dropTable("visas");
  },
};
