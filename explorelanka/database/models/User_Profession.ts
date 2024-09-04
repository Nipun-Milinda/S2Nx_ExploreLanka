import { Model, DataTypes } from "sequelize";
import sequelize from "../db-connection";

class UserProfession extends Model {
  declare UserProfessionID: string;
  declare Employer: string;
  declare Addr_HouseNo: string | null;
  declare Addr_Street: string | null;
  declare Addr_City: string | null;
  declare PostalCode: string | null;
  declare Location: string | null;
  declare Fax: string | null;
  declare Email: string | null;
  declare UserID: string;
  declare VisaApplicationID: string | null;
}

if (sequelize) {
  UserProfession.init(
    {
      UserProfessionID: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      Employer: {
        type: new DataTypes.STRING(),
        allowNull: false,
      },
      Addr_HouseNo: {
        type: new DataTypes.STRING(),
      },
      Addr_Street: {
        type: new DataTypes.STRING(),
      },
      Addr_City: {
        type: new DataTypes.STRING(),
      },
      PostalCode: {
        type: new DataTypes.STRING(),
      },
      Location: {
        type: new DataTypes.STRING(),
      },
      Fax: {
        type: new DataTypes.STRING(),
      },
      Email: {
        type: new DataTypes.STRING(),
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
      tableName: "user_professions",
      sequelize,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
}

export default UserProfession;
