'use strict';
module.exports = (sequelize, DataTypes) => {
  const goodsDetail = sequelize.define(
    'goodsDetail',
    /* Properties */
    {
      goods_detail_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      goods_detail_price: {
        type: DataTypes.INTEGER,
        notNull: false,
        comment: ''
      },
      goods_detail_isView: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        notNull: false,
        comment: ''
      }
    },
    /* options */
    {
      tableName: 't_goods_detail',
      freezeTableName: false,
      underscored: false,
      timestamps: false
    }
  );

  /* Relations */
  goodsDetail.associate = models => {};

  return goodsDetail;
};
