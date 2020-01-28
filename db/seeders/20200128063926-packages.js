'use strict';

const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const data = [];
    let amount = 1;

    while (amount <= 100) {
      const now = new Date();
      const later = new Date();
      later.setDate(later.getDate() + 30);

      data.push({
        endDate: faker.date.between(now, later),
        views: Math.ceil(Math.random() * 300) * 10,
        ratings: faker.random.number(9000) + 1,
        rateAvg: Math.floor(Math.random() * 5) + 0.5,
        onSale: faker.random.boolean(),
        createdAt: now,
        updatedAt: now,
      });
      amount += 1;
    }
    return queryInterface.bulkInsert('packages', data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('packages', null, {});
  },
};
