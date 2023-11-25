const { DataTypes } = require('sequelize');

const database = require('../database/connect');

const Guest = require('../models/Guest');

const Services = database.define('Services', {
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

    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    valor: {
        type: DataTypes.INTEGER,
        allowNull: false       
    },

    obs: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

Guest.belongsTo(Services);

module.exports = Services;