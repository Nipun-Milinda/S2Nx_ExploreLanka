import { Model, DataTypes } from "sequelize";
import sequelize from "../db-connection";
import { UUID } from "crypto";

class Invoice extends Model {
  declare InvoiceID: string;
  declare Amount: number;
  declare InvoiceDate: Date;
  declare PaymentType: string;
  declare PaymentStatus: string;
  declare UserID: string;
  declare VisaApplicationID: string | null;
}

if (sequelize) {
  Invoice.init(
    {
      InvoiceID: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      Amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      InvoiceDate: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      PaymentType: {
        type: new DataTypes.STRING(),
        allowNull: false,
      },
      PaymentStatus: {
        type: new DataTypes.STRING(),
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
    },
    {
      tableName: "invoices",
      sequelize,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
}

export default Invoice;
