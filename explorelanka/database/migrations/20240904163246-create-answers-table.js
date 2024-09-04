"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("answers", {
      AnswerID: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      AnswerValue: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      QuestionID: {
        type: Sequelize.STRING,
        references: {
          model: "questions",
          key: "QuestionID",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      QuestionnaireID: {
        type: Sequelize.STRING,
        references: {
          model: "questionnaires",
          key: "QuestionnaireID",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("answers");
  },
};
