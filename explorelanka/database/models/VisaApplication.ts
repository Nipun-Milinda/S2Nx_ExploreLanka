import { Model, DataTypes } from "sequelize";
import sequelize from "../db-connection";

class VisaApplication extends Model {
  declare VisaApplicationID: string;
  declare FullName: string;
  declare Nationality: string | null;
  declare Gender: string | null;
  declare Naturalized: boolean | null;
  declare Birthday: Date | null;
  declare BirthPlace: string | null;
  declare BirthCountry: string | null;
  declare Height: number | null;
  declare MaritalStatus: string | null;
  declare Dom_HouseNo: string | null;
  declare Dom_Street: string | null;
  declare Dom_City: string | null;
  declare Dom_PostalCode: string | null;
  declare Accommodation_Type: string | null;
  declare Acc_HouseNo: string | null;
  declare Acc_Street: string | null;
  declare Acc_City: string | null;
  declare Acc_PostalCode: string | null;
  declare Telephone: string | null;
  declare MobileNumber: string;
  declare Fax: string | null;
  declare Email: string | null;
  declare VisitObjective: string | null;
  declare RouteToLK: string | null;
  declare TravelMode: string | null;
  declare RequiredPeriod: string | null;
  declare OtherReasons: string | null;
  declare PreviouslyVisited: boolean | null;
  declare Other_ReasonToVisit: string | null;
  declare Pre_VisaID: string | null;
  declare Pre_VisaIssuedDate: Date | null;
  declare Pre_VisaType: string | null;
  declare Pre_LeavingDate: Date | null;
  declare Pre_StartDate: Date | null;
  declare Pre_EndDate: Date | null;
  declare Pre_Purpose: string | null;
  declare Pre_HouseNo: string | null;
  declare Pre_Street: string | null;
  declare Pre_City: string | null;
  declare MoneyOnArrival: number | null;
  declare CreditCardAvailable: boolean | null;
  declare NameOfCard: string | null;
  declare AmountSpent: number | null;
  declare PhotoURL: string | null;
  declare FingerprintURL: string | null;
  declare SignatureURL: string | null;
  declare ApprovalStatus: string | null;
  declare NoticeStatus: string | null;
  declare UserID: string;
  declare CurrentPassportID: string | null;
  declare OldPassportID: string | null;
}

if (sequelize) {
  VisaApplication.init(
    {
      VisaApplicationID: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      FullName: {
        type: new DataTypes.STRING(),
        allowNull: false,
      },
      Nationality: {
        type: new DataTypes.STRING(),
      },
      Gender: {
        type: new DataTypes.STRING(),
      },
      Naturalized: {
        type: new DataTypes.BOOLEAN(),
      },
      Birthday: {
        type: DataTypes.DATE,
      },
      BirthPlace: {
        type: new DataTypes.STRING(),
      },
      BirthCountry: {
        type: new DataTypes.STRING(),
      },
      Height: {
        type: DataTypes.INTEGER,
      },
      MaritalStatus: {
        type: new DataTypes.STRING(),
      },
      Dom_HouseNo: {
        type: new DataTypes.STRING(),
      },
      Dom_Street: {
        type: new DataTypes.STRING(),
      },
      Dom_City: {
        type: new DataTypes.STRING(),
      },
      Dom_PostalCode: {
        type: new DataTypes.STRING(),
      },
      Accommodation_Type: {
        type: new DataTypes.STRING(),
      },
      Acc_HouseNo: {
        type: new DataTypes.STRING(),
      },
      Acc_Street: {
        type: new DataTypes.STRING(),
      },
      Acc_City: {
        type: new DataTypes.STRING(),
      },
      Acc_PostalCode: {
        type: new DataTypes.STRING(),
      },
      Telephone: {
        type: new DataTypes.STRING(),
      },
      MobileNumber: {
        type: new DataTypes.STRING(),
        allowNull: false,
      },
      Fax: {
        type: new DataTypes.STRING(),
      },
      Email: {
        type: new DataTypes.STRING(),
      },
      VisitObjective: {
        type: new DataTypes.STRING(),
      },
      RouteToLK: {
        type: new DataTypes.STRING(),
      },
      TravelMode: {
        type: new DataTypes.STRING(),
      },
      RequiredPeriod: {
        type: new DataTypes.STRING(),
      },
      OtherReasons: {
        type: new DataTypes.STRING(),
      },
      PreviouslyVisited: {
        type: new DataTypes.BOOLEAN(),
      },
      Other_ReasonToVisit: {
        type: new DataTypes.STRING(),
      },
      Pre_VisaID: {
        type: new DataTypes.STRING(),
      },
      Pre_VisaIssuedDate: {
        type: DataTypes.DATE,
      },
      Pre_VisaType: {
        type: new DataTypes.STRING(),
      },
      Pre_LeavingDate: {
        type: DataTypes.DATE,
      },
      Pre_StartDate: {
        type: DataTypes.DATE,
      },
      Pre_EndDate: {
        type: DataTypes.DATE,
      },
      Pre_Purpose: {
        type: new DataTypes.STRING(),
      },
      Pre_HouseNo: {
        type: new DataTypes.STRING(),
      },
      Pre_Street: {
        type: new DataTypes.STRING(),
      },
      Pre_City: {
        type: new DataTypes.STRING(),
      },
      MoneyOnArrival: {
        type: DataTypes.INTEGER,
      },
      CreditCardAvailable: {
        type: new DataTypes.BOOLEAN(),
      },
      NameOfCard: {
        type: new DataTypes.STRING(),
      },
      AmountSpent: {
        type: DataTypes.INTEGER,
      },
      PhotoURL: {
        type: new DataTypes.STRING(),
      },
      FingerprintURL: {
        type: new DataTypes.STRING(),
      },
      SignatureURL: {
        type: new DataTypes.STRING(),
      },
      ApprovalStatus: {
        type: new DataTypes.STRING(),
      },
      NoticeStatus: {
        type: new DataTypes.STRING(),
      },
      UserID: {
        type: DataTypes.STRING,
        references: {
          model: "users",
          key: "UserID",
        },
      },
      CurrentPassportID: {
        type: DataTypes.STRING,
        references: {
          model: "passports",
          key: "PassportID",
        },
      },
      OldPassportID: {
        type: DataTypes.STRING,
        references: {
          model: "passports",
          key: "PassportID",
        },
      },
    },
    {
      tableName: "visa_applications",
      sequelize,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
}

export default VisaApplication;
