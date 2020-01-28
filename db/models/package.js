'use strict';

module.exports = (sequelize, DataTypes) => {
  const Package = sequelize.define('Package', {
    endDate: DataTypes.DATE,
    views: DataTypes.INTEGER,
    ratings: DataTypes.INTEGER,
    rateAvg: DataTypes.DECIMAL(6, 2),
    onSale: DataTypes.BOOLEAN,
  }, {});
  Package.associate = function (models) {
    // associations can be defined here
    Package.hasMany(models.Deal);
  };
  return Package;
};
