const { DataTypes } = require('sequelize');

const database = require('../database/connect');

const Reserve = database.define('Reserve', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        require: true
    },
    
    client: {
        type: DataTypes.STRING,
        allowNull: false
    },
    
    noun: {
        type: DataTypes.STRING,
        allowNull: false
    },

    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    date_reserve: {
        type: DataTypes.DATE,
        allowNull: false,
    },

    date_confirm: {
        type: DataTypes.DATE,
        allowNull: false,
    },

    join_provided: {
        type: DataTypes.DATE,
        allowNull: false,
    },

    leave_provided: {
        type: DataTypes.DATE,
        allowNull: false,
    },

    join_effective: {
        type: DataTypes.DATE,
        allowNull: false,
    },

    leave_effective: {
        type: DataTypes.DATE,
        allowNull: false,
    },

    reserve_value: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },

    comsuption_value: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },

    anticipation_value: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },

    pay_value: {
        type: DataTypes.FLOAT,
        allowNull: false,
    }
});

module.exports = Reserve;