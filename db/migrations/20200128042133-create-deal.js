'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('deals', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING(40),
      },
      msrp: {
        allowNull: false,
        type: Sequelize.DECIMAL(6, 2),
      },
      salePrice: {
        allowNull: false,
        type: Sequelize.DECIMAL(6, 2),
      },
      extraPrice: {
        allowNull: false,
        type: Sequelize.DECIMAL(6, 2),
      },
      bought: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      allowed: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      soldOut: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      salePercent: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      extraPercent: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      packageId: {
        allowNull: false,
        type: Sequelize.INTEGER,
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
    return queryInterface.dropTable('deals');
  },
};
