const { DataTypes } = require('sequelize');

const database = require('../database/connect');

const Official = database.define('Official', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        require: true
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true
    },

    number_contract: {
        type: DataTypes.INTEGER,
        allowNull: false,
        require: true
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true
    }
});

module.exports = Official;