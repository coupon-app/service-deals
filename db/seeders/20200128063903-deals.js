'use strict';

const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const data = [];
    let packageId = 1;
    let id = 1;

    const min = 10;
    const max = 1000;
    const precision = 0.01;

    const moneyRound = (num) => (Math.ceil(num * 100) / 100);
    const percent = (num) => Math.trunc(num * 100);

    while (packageId <= 100) {
      const packageDeals = faker.random.number({ min: 1, max: 4, precision: 1 });
      for (let i = 1; i <= packageDeals; i += 1) {
        const msrp = faker.random.number({ min, max }) + 0.99;
        const sale = faker.random.number({ min: 0.05, max: 0.35, precision });
        const salePrice = moneyRound(msrp - (msrp * sale));
        const extraSale = sale + (faker.random.number({ min: 0.01, max: 0.1, precision }));
        const extraPrice = moneyRound(salePrice - (salePrice * extraSale));
        const allowed = faker.random.number({ min: 200, max, precision: 10 });
        const bought = faker.random.number({ min: 0, max: allowed, precision: 10 });
        const date = new Date();

        data.push({
          id,
          title: faker.lorem.words(),
          msrp,
          salePrice,
          extraPrice,
          bought,
          allowed,
          soldOut: faker.random.boolean(),
          salePercent: percent(sale),
          extraPercent: percent(extraSale),
          packageId,
          createdAt: date,
          updatedAt: date,
        });

        id += 1;
      }

      packageId += 1;
    }

    return queryInterface.bulkInsert('deals', data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('deals', null, {});
  },
};
