'use strict';
module.exports = (sequelize, DataTypes) => {
  const approval = sequelize.define(
    'approval',
    /* Properties */
    {
      approval_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      approval_yn: {
        type: DataTypes.STRING(255),
        notNull: false,
        comment: ''
      },
      approval_kinds: {
        type: DataTypes.STRING(255),
        notNull: false,
        comment: ''
      },
      approval_date: {
        type: DataTypes.DATE,
        notNull: false,
        comment: ''
      }
    },
    /* options */
    {
      tableName: 't_approval',
      freezeTableName: false,
      underscored: true,
      timestamps: false
    }
  );

  /* Relations */
  approval.associate = models => {};

  return approval;
};
