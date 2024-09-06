import { Model, DataTypes } from "sequelize";
import sequelize from "../db-connection";

class UserContact extends Model {
  declare UserContactID: string;
  declare Emg_Name: string;
  declare Emg_MobileNumber: string;
  declare Emg_Relationship: string;
  declare Emg_HouseNo: string;
  declare Emg_Street: string;
  declare Emg_City: string;
  declare Type: string;
  declare VisaApplicationID: string | null;
  declare UserID: string;
}

if (sequelize) {
  UserContact.init(
    {
      UserContactID: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      Emg_Name: {
        type: new DataTypes.STRING(),
        allowNull: false,
      },
      Emg_MobileNumber: {
        type: new DataTypes.STRING(),
        allowNull: false,
      },
      Emg_Relationship: {
        type: new DataTypes.STRING(),
        allowNull: false,
      },
      Emg_HouseNo: {
        type: new DataTypes.STRING(),
        allowNull: false,
      },
      Emg_Street: {
        type: new DataTypes.STRING(),
        allowNull: false,
      },
      Emg_City: {
        type: new DataTypes.STRING(),
        allowNull: false,
      },
      Type: {
        type: new DataTypes.STRING(),
        allowNull: false,
      },
      VisaApplicationID: {
        type: DataTypes.UUID,
        references: {
          model: "visa_applications",
          key: "VisaApplicationID",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
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
      tableName: "user_contacts",
      sequelize,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
}

export default UserContact;
