'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('authors', [
      {
        firstName: 'James',
        lastName: 'Jones',
        email: 'jjones@test.com',
        createdAt: new Date,
        updatedAt: new Date,
      },
      {
        firstName: 'David',
        lastName: 'Dunn',
        email: 'ddunn@test.com',
        createdAt: new Date,
        updatedAt: new Date,
      },
      {
        firstName: 'Sam',
        lastName: 'Smith',
        email: 'ssmith@test.com',
        createdAt: new Date,
        updatedAt: new Date,
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('posts', null, {});
  }
};
