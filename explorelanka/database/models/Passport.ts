import { Model, DataTypes } from "sequelize";
import sequelize from "../db-connection";
import { UUID } from "crypto";

class Passport extends Model {
  declare PassportID: UUID;
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
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
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
        type: DataTypes.UUID,
        references: {
          model: "users",
          key: "UserID",
        },
        allowNull: false,
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
