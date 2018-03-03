'use strict';
module.exports = (sequelize, DataTypes) => {
  var Event = sequelize.define('Event', {
    title:  DataTypes.STRING,
    startDate: {
      type: DataTypes.STRING,
      validate: { isDate: true }
    },
    endDate: {
      type: DataTypes.DATEONLY,
      validate: { isDate: true }
    },
    description: DataTypes.TEXT
  }, {
    timestamps: false,
    validate: {
      startBeforeEnd() {
        if (Date.parse(this.startDate) > Date.parse(this.endDate)) {
          throw new Error("Start date can't be after end date.")
        }
      }
    }
  });
  Event.associate = function(models) {
    // associations can be defined here
  };
  return Event;
};