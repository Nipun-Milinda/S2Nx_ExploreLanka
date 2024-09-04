import { Model, DataTypes } from "sequelize";
import sequelize from "../db-connection";

class UserSpouse extends Model {
  declare UserSpouseID: string;
  declare Sp_FullName: string;
  declare Sp_Nationality: string | null;
  declare Sp_HouseNo: string | null;
  declare Sp_Street: string | null;
  declare Sp_City: string | null;
  declare Sp_PassportNo: string | null;
  declare Sp_DateOfExpiry: Date | null;
  declare UserID: string;
  declare VisaApplicationID: string | null;
}

if (sequelize) {
  UserSpouse.init(
    {
      UserSpouseID: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      Sp_FullName: {
        type: new DataTypes.STRING(),
        allowNull: false,
      },
      Sp_Nationality: {
        type: new DataTypes.STRING(),
      },
      Sp_HouseNo: {
        type: new DataTypes.STRING(),
      },
      Sp_Street: {
        type: new DataTypes.STRING(),
      },
      Sp_City: {
        type: new DataTypes.STRING(),
      },
      Sp_PassportNo: {
        type: new DataTypes.STRING(),
      },
      Sp_DateOfExpiry: {
        type: DataTypes.DATE,
      },
      UserID: {
        type: DataTypes.STRING,
        references: {
          model: "users",
          key: "UserID",
        },
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
      tableName: "user_spouses",
      sequelize,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
}

export default UserSpouse;
