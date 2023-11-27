const { DataTypes } = require('sequelize');

const database = require('../database/connect');

const Noun = database.define('Noun', {
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

    ramal_noun: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    capacity: {
        type: DataTypes.INTEGER,
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

module.exports = Noun;