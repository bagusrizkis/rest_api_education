"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn("Movies", "UserId", {
      type: Sequelize.INTEGER,
    });

    await queryInterface.addConstraint("Movies", {
      fields: ["UserId"],
      type: "foreign key",
      name: "user_fk",
      references: {
        table: "Users",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });

    await queryInterface.addConstraint("Users", {
      fields: ["email"],
      type: "unique",
      name: "user_unique_email",
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeConstraint("Users", "user_unique_email");
    await queryInterface.removeConstraint("Movies", "user_fk");
    await queryInterface.removeColumn("Movies", "UserId");
  },
};
