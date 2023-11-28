const { DataTypes } = require('sequelize');

const database = require('../database/connect');

const Reserve = require('../models/Reserve');
const Guest = require('../models/Guest');
const Comsuption = require('../models/Comsuption');

const Income = database.define('Income', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    }
});

Reserve.belongsTo(Income);
Guest.belongsTo(Income);
Comsuption.belongsTo(Income);

module.exports = Income;
