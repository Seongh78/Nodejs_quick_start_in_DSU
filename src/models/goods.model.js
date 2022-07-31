'use strict';
module.exports = (sequelize, DataTypes) => {
  const goods = sequelize.define(
    'goods',
    /* Properties */
    {
      goods_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      goods_nm: {
        type: DataTypes.STRING(255),
        notNull: false,
        comment: ''
      },
      goods_address: {
        type: DataTypes.STRING(255),
        notNull: false,
        comment: ''
      },
      goods_tel: {
        type: DataTypes.STRING(255),
        notNull: false,
        comment: ''
      }
    },
    /* options */
    {
      tableName: 't_goods',
      freezeTableName: false,
      underscored: false,
      timestamps: false
    }
  );

  /* Relations */
  goods.associate = models => {};

  return goods;
};
