import { Model, DataTypes } from "sequelize";
import sequelize from "../db-connection";

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
        type: DataTypes.STRING,
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
        type: DataTypes.STRING,
        references: {
          model: "users",
          key: "UserID",
        },
        allowNull: false,
      },
      VisaApplicationID: {
        type: DataTypes.STRING,
        references: {
          model: "visa_applications",
          key: "VisaApplicationID",
        },
        allowNull: true,
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
