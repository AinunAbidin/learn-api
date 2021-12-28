'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Departments', {
      id: { 
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      department_head: {
        type: Sequelize.STRING
      },
      department_description: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Departments');
  }
};