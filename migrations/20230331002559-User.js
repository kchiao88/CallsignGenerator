'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.DataTypes.INTEGER });
     */
    return queryInterface.createTable('User', {

        account_id: {
            type: Sequelize.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true,
        },

        username: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
            unique: true,
        },

        email: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
          unique: true
        },

        first_name: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
          unique: false
        }, 

        last_name: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
          unique: false
        },

        password_hashed: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
            unique: false,
        },

        radio_callsign: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
            unique: true,
        }

    });
},

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    return queryInterface.dropTable('User');
  }
};