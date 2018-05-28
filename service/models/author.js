'use strict';
module.exports = (sequelize, DataTypes) => {
  var author = sequelize.define('author', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  author.associate = function(models) {
    author.hasMany(models.post, { foreignKey: 'author_id' });
  };
  return author;
};