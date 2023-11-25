const { DataTypes } = require('sequelize');

const database = require('../database/connect');

const Guest = databse.define('Guest', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        require: true
    },

    email: {
        type: DataTypes.STRING,
        
    }
});

module.exports = Guest