const { DataTypes } = require('sequelize');

const database = require('../database/connect');

const Official = database.define('Official', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true
    },

    office: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true
    }
});

module.exports = Official;