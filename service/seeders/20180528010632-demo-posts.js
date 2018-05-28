'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('posts', [
      {
        title: 'Post 1',
        author_id: 1,
        createdAt: new Date,
        updatedAt: new Date,
      },
      {
        title: 'Post 2',
        author_id: 2,
        createdAt: new Date,
        updatedAt: new Date,
      },
      {
        title: 'Post 3',
        author_id: 2,
        createdAt: new Date,
        updatedAt: new Date,
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('posts', null, {});
  }
};
