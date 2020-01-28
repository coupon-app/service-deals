'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('packages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      endDate: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      views: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      ratings: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      rateAvg: {
        allowNull: false,
        type: Sequelize.DECIMAL(6, 2),
      },
      onSale: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('packages');
  },
};
