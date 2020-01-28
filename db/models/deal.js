'use strict';

module.exports = (sequelize, DataTypes) => {
  const Deal = sequelize.define('Deal', {
    title: DataTypes.STRING,
    msrp: DataTypes.INTEGER(6, 2),
    salePrice: DataTypes.INTEGER(6, 2),
    extraPrice: DataTypes.INTEGER(6, 2),
    bought: DataTypes.INTEGER,
    allowed: DataTypes.INTEGER,
    soldOut: DataTypes.BOOLEAN,
    percent: DataTypes.INTEGER,
  }, {});
  Deal.associate = function (models) {
    // associations can be defined here
    Deal.belongsTo(models.Coffee);
  };
  return Deal;
};
