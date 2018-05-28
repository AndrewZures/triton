'use strict';
module.exports = (sequelize, DataTypes) => {
  var post = sequelize.define('post', {
    title: DataTypes.STRING,
    author_id: DataTypes.INTEGER
  }, {});
  post.associate = function(models) {
    post.belongsTo(models.author, { foreignKey: 'author_id' })
  };
  return post;
};