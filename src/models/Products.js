const { DataTypes } = require('sequelize');

const database = require('../database/connect');

const Products = database.define('Products', {
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

    type: {
        type: DataTypes.STRING,
        allowNull: false
    },

    date: {
        type: DataTypes.DATE,
        allowNull: false
    },

    valor: {
        type: DataTypes.FLOAT,
        allowNull: false
    },

    obs: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Products;