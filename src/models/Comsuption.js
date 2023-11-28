const { DataTypes } = require('sequelize');

const database = require('../database/connect');

const Guest = require('../models/Guest');

const Comsuption = database.define('Comsuption', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        require: true
    },

    product: {
        type: DataTypes.STRING,
        allowNull: true
    },

    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    service: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
});

Guest.belongsTo(Comsuption);

module.exports = Comsuption;