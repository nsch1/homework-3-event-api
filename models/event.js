'use strict';
module.exports = (sequelize, DataTypes) => {
  var Event = sequelize.define('Event', {
    title: DataTypes.STRING,
    startDate: DataTypes.DATEONLY,
    endDate: DataTypes.DATEONLY,
    description: DataTypes.TEXT
  }, {
    timestamps: false
  });
  Event.associate = function(models) {
    // associations can be defined here
  };
  return Event;
};