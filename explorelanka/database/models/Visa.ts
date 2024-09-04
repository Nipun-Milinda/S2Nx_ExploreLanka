import { Model, DataTypes } from "sequelize";
import sequelize from "../db-connection";

class Visa extends Model {
  declare VisaID: string;
  declare VisaType: string;
  declare CountryOfIssue: string;
  declare VisaNumber: string;
  declare PassportNumber: string;
  declare HoldersName: string;
  declare Nationality: string;
  declare DateOfIssue: Date;
  declare ExpirationDate: Date;
  declare EntryType: string;
  declare PurposeOfVisit: string;
  declare StayDuration: string;
  declare IssuedBy: string;
  declare VisaStatus: string;
  declare Remarks: string | null;
  declare HoldersPhoneNumber: string;
  declare HoldersEmail: string;
  declare DateOfEntry: Date | null;
  declare DateOfExit: Date | null;
  declare VisaFee: number;
  declare Fingerprint: string | null;
  declare Photo: string | null;
  declare VisaApplicationID: string;
}

if (sequelize) {
  Visa.init(
    {
      VisaID: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      VisaType: {
        type: new DataTypes.STRING(),
        allowNull: false,
      },
      CountryOfIssue: {
        type: new DataTypes.STRING(),
        allowNull: false,
      },
      VisaNumber: {
        type: new DataTypes.STRING(),
        allowNull: false,
      },
      PassportNumber: {
        type: new DataTypes.STRING(),
        allowNull: false,
      },
      HoldersName: {
        type: new DataTypes.STRING(),
        allowNull: false,
      },
      Nationality: {
        type: new DataTypes.STRING(),
        allowNull: false,
      },
      DateOfIssue: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      ExpirationDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      EntryType: {
        type: new DataTypes.STRING(),
        allowNull: false,
      },
      PurposeOfVisit: {
        type: new DataTypes.STRING(),
        allowNull: false,
      },
      StayDuration: {
        type: new DataTypes.STRING(),
        allowNull: false,
      },
      IssuedBy: {
        type: new DataTypes.STRING(),
        allowNull: false,
      },
      VisaStatus: {
        type: new DataTypes.STRING(),
        allowNull: false,
      },
      Remarks: {
        type: new DataTypes.STRING(),
        allowNull: true,
      },
      HoldersPhoneNumber: {
        type: new DataTypes.STRING(),
        allowNull: false,
      },
      HoldersEmail: {
        type: new DataTypes.STRING(),
        allowNull: false,
      },
      DateOfEntry: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      DateOfExit: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      VisaFee: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Fingerprint: {
        type: new DataTypes.STRING(),
        allowNull: true,
      },
      Photo: {
        type: new DataTypes.STRING(),
        allowNull: true,
      },
      VisaApplicationID: {
        type: DataTypes.STRING,
        references: {
          model: "visa_applications",
          key: "VisaApplicationID",
        },
      },
    },
    {
      tableName: "visas",
      sequelize,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
}

export default Visa;
