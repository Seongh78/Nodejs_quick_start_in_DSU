'use strict';
module.exports = (sequelize, DataTypes) => {
  const refund = sequelize.define(
    'refund',
    /* Properties */
    {
      refund_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      refund_category: {
        type: DataTypes.STRING(255),
        notNull: false,
        comment: ''
      },
      refund_reason: {
        type: DataTypes.STRING,
        notNull: false,
        comment: ''
      },
      refund_accountHolder: {
        type: DataTypes.STRING(255),
        notNull: false,
        comment: ''
      },
      refund_bank: {
        type: DataTypes.STRING(255),
        notNull: false,
        comment: ''
      },
      refund_accountNumber: {
        type: DataTypes.STRING(255),
        notNull: false,
        comment: ''
      },
      refund_deducationAmount: {
        type: DataTypes.INTEGER,
        notNull: false,
        comment: ''
      },
      refund_amount: {
        type: DataTypes.STRING(255),
        notNull: false,
        comment: ''
      },
      refund_memo: {
        type: DataTypes.STRING(255),
        notNull: false,
        comment: ''
      },
      refund_cancellationDate: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
        notNull: false,
        comment: ''
      }
    },
    /* options */
    {
      tableName: 't_refund',
      freezeTableName: false,
      underscored: false,
      timestamps: false
    }
  );

  /* Relations */
  refund.associate = models => {};

  return refund;
};
