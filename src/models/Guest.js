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

    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },

    cellphone: {
        type: DataTypes.STRING,
        allowNull: false
    },

    cpf: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },

    genre: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

module.exports = Guest