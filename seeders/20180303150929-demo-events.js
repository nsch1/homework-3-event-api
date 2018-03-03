'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Events', [
      {
        title: "Party Somewhere",
        startDate: "2018-03-15",
        endDate: "2018-03-17",
        description: "Party whereever you want."      
      },
      {
        title: "Festival from the Past",
        startDate: Date(2017, 11, 2),
        endDate: "2017-12-08"
      }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Events', null, {})
  }
};
