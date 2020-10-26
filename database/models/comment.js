module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    comment: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    twitId: DataTypes.INTEGER
  }, {
    timestamps: false,
  });

  Comment.associate = function(models) {

    Comment.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'writer',
      onDelete: 'CASCADE',
    });

    Comment.belongsTo(models.Twit, {
      foreignKey: 'twitId',
      as: 'twit',
      onDelete: 'CASCADE',
    })
  };
  return Comment;
};