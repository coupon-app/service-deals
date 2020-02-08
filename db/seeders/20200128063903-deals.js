'use strict';

const { number, boolean } = require('faker').random;
const { words } = require('faker').lorem;

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
      const packageDeals = number({ min: 1, max: 4, precision: 1 });
      for (let i = 1; i <= packageDeals; i += 1) {
        const msrp = number({ min, max }) + 0.99;
        const sale = number({ min: 0.05, max: 0.35, precision });
        const salePrice = moneyRound(msrp - (msrp * sale));
        const extraSale = sale + (number({ min: 0.01, max: 0.1, precision }));
        const extraPrice = moneyRound(salePrice - (salePrice * extraSale));
        const allowed = number({ min: 200, max, precision: 10 });
        const bought = number({ min: 0, max: allowed, precision: 10 });
        const date = new Date();

        data.push({
          id,
          title: words(),
          msrp,
          salePrice,
          extraPrice,
          bought,
          allowed,
          soldOut: boolean(),
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
