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
  declare MobileNumber: string | null;
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
        type: DataTypes.STRING,
        allowNull: false,
      },
      Password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Image: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      EmailVerified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      Country: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      FullName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Nationality: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Gender: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Naturalized: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      Birthday: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      BirthPlace: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      BirthCountry: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Height: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      MaritalStatus: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Addr_HouseNo: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Addr_Street: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Addr_City: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      PostalCode: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      MobileNumber: {
        type: DataTypes.STRING,
        allowNull: true,
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
