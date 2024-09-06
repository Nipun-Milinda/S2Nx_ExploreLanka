import { Model, DataTypes } from "sequelize";
import sequelize from "../db-connection";

class User extends Model {
  declare UserID: string;
  declare Email: string;
  declare Password: string;
  declare Image: string | null;
  declare EmailVerified: boolean;
  declare Country: string | null;
  declare FullName: string;
  declare Nationality: string | null;
  declare Gender: string | null;
  declare Naturalized: boolean | null;
  declare Birthday: Date | null;
  declare BirthPlace: string | null;
  declare BirthCountry: string | null;
  declare Height: number | null;
  declare MaritalStatus: string | null;
  declare Addr_HouseNo: string | null;
  declare Addr_Street: string | null;
  declare Addr_City: string | null;
  declare PostalCode: string | null;
  declare MobileNumber: string;
}

if (sequelize) {
  User.init(
    {
      UserID: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      Email: {
        type: new DataTypes.STRING(),
        allowNull: false,
      },
      Password: {
        type: new DataTypes.STRING(),
        allowNull: false,
      },
      Image: {
        type: new DataTypes.STRING(),
      },
      EmailVerified: {
        type: new DataTypes.BOOLEAN(),
        allowNull: false,
      },
      Country: {
        type: new DataTypes.STRING(),
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
      MobileNumber: {
        type: new DataTypes.STRING(),
        allowNull: false,
      },
    },
    {
      tableName: "users",
      sequelize,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
}

export default User;
