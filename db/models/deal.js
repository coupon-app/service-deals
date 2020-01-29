'use strict';

module.exports = (sequelize, DataTypes) => {
  const deals = sequelize.define('deals', {
    title: DataTypes.STRING,
    msrp: DataTypes.INTEGER(6, 2),
    salePrice: DataTypes.INTEGER(6, 2),
    extraPrice: DataTypes.INTEGER(6, 2),
    bought: DataTypes.INTEGER,
    allowed: DataTypes.INTEGER,
    soldOut: DataTypes.BOOLEAN,
    salePercent: DataTypes.INTEGER,
    extraPercent: DataTypes.INTEGER,
    packageId: DataTypes.INTEGER,
  }, {});
  deals.associate = function (models) {
    // associations can be defined here
    deals.belongsTo(models.packages);
  };
  return deals;
};
