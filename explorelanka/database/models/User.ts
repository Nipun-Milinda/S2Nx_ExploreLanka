import { Model, DataTypes } from "sequelize";
import sequelize from "../db-connection";
class User extends Model {
  declare id: number;
  declare name: string;
  declare preferred_name: string | null;
}

if (sequelize) {
  User.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      firstName: {
        type: new DataTypes.STRING(),
        allowNull: false,
      },
      lastName: {
        type: new DataTypes.STRING(),
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
