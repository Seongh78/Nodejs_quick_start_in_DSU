'use strict';
module.exports = (sequelize, DataTypes) => {
  const dept = sequelize.define(
    'dept',
    /* Properties */
    {
      dept_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      dept_nm: {
        type: DataTypes.STRING(255),
        notNull: false,
        comment: ''
      },
      dept_parentId: {
        type: DataTypes.STRING(255),
        notNull: false,
        comment: ''
      },
      dept_path: {
        type: DataTypes.STRING(255),
        notNull: false,
        comment: ''
      },
      dept_manager: {
        type: DataTypes.STRING(255),
        notNull: false,
        comment: ''
      },
      dept_createdAt: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
        notNull: false,
        comment: ''
      },
      dept_updatedAt: {
        type: DataTypes.DATE,
        notNull: false,
        comment: ''
      }
    },
    /* options */
    {
      tableName: 't_dept',
      freezeTableName: false,
      underscored: false,
      timestamps: false
    }
  );

  /* Relations */
  dept.associate = models => {};

  return dept;
};
