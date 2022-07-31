'use strict';
module.exports = (sequelize, DataTypes) => {
  const reservation = sequelize.define(
    'reservation',
    /* Properties */
    {
      reservation_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      reservation_type: {
        type: DataTypes.ENUM(
          'RESERVATION_WAIT',
          'RESERVATION_COMPLETE',
          'REFUND_WAIT',
          'REFUND_COMPLETE',
          'CANCEL'
        ),
        notNull: false,
        comment: ''
      },
      reservation_startDate: {
        type: DataTypes.DATE,
        notNull: false,
        comment: ''
      },
      reservation_endDate: {
        type: DataTypes.DATE,
        notNull: false,
        comment: ''
      }
    },
    /* options */
    {
      tableName: 't_reservation',
      freezeTableName: false,
      underscored: false,
      timestamps: false
    }
  );

  /* Relations */
  reservation.associate = models => {};

  return reservation;
};
