'use strict';
module.exports = (sequelize, DataTypes) => {
  const promotion = sequelize.define(
    'promotion',
    /* Properties */
    {
      promotion_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      promotion_nm: {
        type: DataTypes.STRING(255),
        notNull: false,
        comment: ''
      },
      promotion_discount: {
        type: DataTypes.INTEGER,
        notNull: false,
        comment: ''
      },
      promotion_discountType: {
        type: DataTypes.ENUM('PRICE', 'PERCENTAGE'),
        defaultValue: 'PRICE',
        notNull: false,
        comment: ''
      },
      promotion_isUsed: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        notNull: false,
        comment: ''
      }
    },
    /* options */
    {
      tableName: 't_promotion',
      freezeTableName: false,
      underscored: false,
      timestamps: false
    }
  );

  /* Relations */
  promotion.associate = models => {};

  return promotion;
};
