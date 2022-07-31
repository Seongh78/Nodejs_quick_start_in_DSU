'use strict';
module.exports = (sequelize, DataTypes) => {
  const comment = sequelize.define(
    'comment',
    /* Properties */
    {
      comment_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      comment_parentId: {
        type: DataTypes.INTEGER,
        notNull: false,
        comment: ''
      },
      comment_depth: {
        type: DataTypes.INTEGER,
        notNull: false,
        comment: ''
      },
      comment_contents: {
        type: DataTypes.STRING(255),
        notNull: false,
        comment: ''
      },
      comment_createdAt: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
        notNull: false,
        comment: ''
      },
      comment_updatedAt: {
        type: DataTypes.DATE,
        notNull: false,
        comment: ''
      }
    },
    /* options */
    {
      tableName: 't_comment',
      freezeTableName: false,
      underscored: false,
      timestamps: false
    }
  );

  /* Relations */
  comment.associate = models => {};

  return comment;
};
