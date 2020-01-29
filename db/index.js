const Sequelize = require('sequelize');
const mysqlConfig = require('./config');
const { deals } = require('./models');
const { packages } = require('./models');

const sequelize = new Sequelize(mysqlConfig);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

const returnPackage = (id, cb) => {
  const results = [];

  packages.findAll({
    where: {
      id,
    },
    logging: false,
  })
    .then((packageData) => {
      results.push(packageData);
      deals
        .findAll({
          where: {
            packageId: id,
          },
          logging: false,
        })
        .then((dealData) => {
          results.push(dealData);
          cb(results);
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { returnPackage };
