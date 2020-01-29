'use strict';

module.exports = (sequelize, DataTypes) => {
  const packages = sequelize.define('packages', {
    endDate: DataTypes.DATE,
    views: DataTypes.INTEGER,
    ratings: DataTypes.INTEGER,
    rateAvg: DataTypes.DECIMAL(6, 2),
    onSale: DataTypes.BOOLEAN,
  }, {});
  packages.associate = function (models) {
    // associations can be defined here
    packages.hasMany(models.deals);
  };
  return packages;
};
