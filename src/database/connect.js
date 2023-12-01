const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('gwesty_system', '', '', {
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql'
});

try {
    sequelize.authenticate();
    console.log('Banco de dados conectado com sucesso!')
} catch (error) {
    console.error(error)
}

module.exports = sequelize;
