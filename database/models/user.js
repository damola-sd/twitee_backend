
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: DataTypes.STRING,
    date_created: DataTypes.DATE
  }, {
    timestamps: false,
  });

  User.associate = function(models) {

    User.hasMany(models.Twit, {
      foreignKey: 'userId',
      as: 'twits',
      onDelete: 'CASCADE',
    });

    User.hasMany(models.Comment, {
      foreignKey: 'userId',
      as: 'comments',
      onDelete: 'CASCADE',
    });
  };
  return User;
};