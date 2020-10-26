module.exports = (sequelize, DataTypes) => {
  const Twit = sequelize.define('Twit', {
    twit: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    likes: DataTypes.INTEGER
  }, {});

  Twit.associate = function(models) {

    Twit.hasMany(models.Comment, {
      foreignKey: 'twitId',
      as: 'comments',
      onDelete: 'CASCADE',
    });

    Twit.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'writer',
      onDelete: 'CASCADE',
    })
  };
  return Twit;
};