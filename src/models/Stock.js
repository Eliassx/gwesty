const { DataTypes } = require('sequelize');

const database = require('../database/connect');

const Stocks = database.define('Stocks', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        require: true
    },

    description: {
        type: DataTypes.STRING,
        allowNull: false
    },

    quatity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    date_stocks: {
        type: DataTypes.DATE,
        allowNull: false
    },

    type: {
        type: DataTypes.STRING,
        allowNull: false
    },

    obs: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Stocks;