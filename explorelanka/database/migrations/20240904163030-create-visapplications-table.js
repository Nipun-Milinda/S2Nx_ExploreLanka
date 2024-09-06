"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("visa_applications", {
      VisaApplicationID: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      FullName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Nationality: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Gender: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Naturalized: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      Birthday: {
        type: Sequelize.DATE,
        allowNull: false,
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
      Dom_HouseNo: {
        type: Sequelize.STRING,
      },
      Dom_Street: {
        type: Sequelize.STRING,
      },
      Dom_City: {
        type: Sequelize.STRING,
      },
      Dom_PostalCode: {
        type: Sequelize.STRING,
      },
      Accommodation_Type: {
        type: Sequelize.STRING,
      },
      Acc_HouseNo: {
        type: Sequelize.STRING,
      },
      Acc_Street: {
        type: Sequelize.STRING,
      },
      Acc_City: {
        type: Sequelize.STRING,
      },
      Acc_PostalCode: {
        type: Sequelize.STRING,
      },
      Telephone: {
        type: Sequelize.STRING,
      },
      MobileNumber: {
        type: Sequelize.STRING,
      },
      Fax: {
        type: Sequelize.STRING,
      },
      Email: {
        type: Sequelize.STRING,
      },
      VisitObjective: {
        type: Sequelize.STRING,
      },
      RouteToLK: {
        type: Sequelize.STRING,
      },
      TravelMode: {
        type: Sequelize.STRING,
      },
      RequiredPeriod: {
        type: Sequelize.STRING,
      },
      OtherReasons: {
        type: Sequelize.TEXT,
      },
      PreviouslyVisited: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      Other_ReasonToVisit: {
        type: Sequelize.TEXT,
      },
      Pre_VisaID: {
        type: Sequelize.STRING,
      },
      Pre_VisaIssuedDate: {
        type: Sequelize.DATE,
      },
      Pre_VisaType: {
        type: Sequelize.STRING,
      },
      Pre_LeavingDate: {
        type: Sequelize.DATE,
      },
      Pre_StartDate: {
        type: Sequelize.DATE,
      },
      Pre_EndDate: {
        type: Sequelize.DATE,
      },
      Pre_Purpose: {
        type: Sequelize.STRING,
      },
      Pre_HouseNo: {
        type: Sequelize.STRING,
      },
      Pre_Street: {
        type: Sequelize.STRING,
      },
      Pre_City: {
        type: Sequelize.STRING,
      },
      MoneyOnArrival: {
        type: Sequelize.FLOAT,
      },
      CreditCardAvailable: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      NameOfCard: {
        type: Sequelize.STRING,
      },
      AmountSpent: {
        type: Sequelize.FLOAT,
      },
      PhotoURL: {
        type: Sequelize.STRING,
      },
      FingerprintURL: {
        type: Sequelize.STRING,
      },
      SignatureURL: {
        type: Sequelize.STRING,
      },
      ApprovalStatus: {
        type: Sequelize.STRING,
      },
      NoticeStatus: {
        type: Sequelize.STRING,
      },
      UserID: {
        type: Sequelize.UUID,
        references: {
          model: "users",
          key: "UserID",
        },
      },
      CurrentPassportID: {
        type: Sequelize.UUID,
        references: {
          model: "passports",
          key: "PassportID",
        },
      },
      OldPassportID: {
        type: Sequelize.UUID,
        references: {
          model: "passports",
          key: "PassportID",
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
    await queryInterface.dropTable("visa_applications");
  },
};
