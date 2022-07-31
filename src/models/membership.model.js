'use strict';
module.exports = (sequelize, DataTypes) => {
  const membership = sequelize.define(
    'membership',
    /* Properties */
    {
      membership_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      membership_nm: {
        type: DataTypes.STRING(255),
        notNull: false,
        comment: ''
      },
      membership_accumulate: {
        type: DataTypes.STRING(255),
        notNull: false,
        comment: ''
      }
    },
    /* options */
    {
      tableName: 't_membership',
      freezeTableName: false,
      underscored: true,
      timestamps: false
    }
  );

  /* Relations */
  membership.associate = models => {};

  return membership;
};
