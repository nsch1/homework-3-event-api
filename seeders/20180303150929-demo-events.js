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
        startDate: "2017-12-02",
        endDate: "2017-12-08",
        description: "Blast from the past."
      }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Events', null, {})
  }
};
