const { DataTypes } = require('sequelize');

const database = require('../database/connect');

const Guest = database.define('Guest', {
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
        unique: true
    },

    cellphone: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    cpf: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },

    genre: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

module.exports = Guest