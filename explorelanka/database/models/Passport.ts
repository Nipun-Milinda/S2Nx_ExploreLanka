import { Model, DataTypes } from "sequelize";
import sequelize from "../db-connection";

class Passport extends Model {
  declare PassportID: string;
  declare PassportNo: string;
  declare PlaceOfIssue: string | null;
  declare DateOfIssue: Date | null;
  declare DateOfExpiry: Date | null;
  declare PassportURL: string | null;
  declare CurrentPassport: boolean;
  declare UserID: string;
}

if (sequelize) {
  Passport.init(
    {
      PassportID: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      PassportNo: {
        type: new DataTypes.STRING(),
        allowNull: false,
      },
      PlaceOfIssue: {
        type: new DataTypes.STRING(),
      },
      DateOfIssue: {
        type: DataTypes.DATE,
      },
      DateOfExpiry: {
        type: DataTypes.DATE,
      },
      PassportURL: {
        type: new DataTypes.STRING(),
      },
      CurrentPassport: {
        type: new DataTypes.BOOLEAN(),
        allowNull: false,
      },
      UserID: {
        type: DataTypes.STRING,
        references: {
          model: "users",
          key: "UserID",
        },
      },
    },
    {
      tableName: "passports",
      sequelize,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
}

export default Passport;
