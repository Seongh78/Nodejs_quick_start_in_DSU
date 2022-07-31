'use strict';
module.exports = (sequelize, DataTypes) => {
  const emp = sequelize.define(
    'emp',
    /* Properties */
    {
      emp_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      emp_nm: {
        type: DataTypes.STRING(255),
        notNull: false,
        comment: ''
      },
      emp_account: {
        type: DataTypes.STRING(255),
        notNull: false,
        comment: ''
      },
      emp_password: {
        type: DataTypes.STRING(255),
        notNull: false,
        comment: ''
      },
      emp_joinDate: {
        type: DataTypes.STRING(255),
        notNull: false,
        comment: ''
      },
      emp_address: {
        type: DataTypes.STRING(255),
        notNull: false,
        comment: ''
      },
      emp_email: {
        type: DataTypes.STRING(255),
        notNull: false,
        comment: ''
      },
      emp_tel: {
        type: DataTypes.STRING(255),
        notNull: false,
        comment: ''
      },
      emp_phone: {
        type: DataTypes.STRING(255),
        notNull: false,
        comment: ''
      },
      emp_email: {
        type: DataTypes.STRING(255),
        notNull: false,
        comment: ''
      },
      emp_isUsed: {
        type: DataTypes.ENUM('ENABLE', 'DISABLE', 'REST'),
        defaultValue: 'ENABLE',
        notNull: false,
        comment: ''
      },
      emp_vacationDate: {
        type: DataTypes.STRING(255),
        notNull: false,
        comment: ''
      },
      emp_createdAt: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
        notNull: false,
        comment: ''
      },
      emp_updatedAt: {
        type: DataTypes.DATE,
        notNull: false,
        comment: ''
      }
    },
    /* options */
    {
      tableName: 't_emp',
      freezeTableName: false,
      underscored: false,
      timestamps: false
    }
  );

  /* Relations */
  emp.associate = models => {};

  return emp;
};
