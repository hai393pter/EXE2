'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Products', 'timeStamp', {
      type: Sequelize.DATE, 
      allowNull: true, 
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), 
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Products', 'timeStamp');
  },
};
