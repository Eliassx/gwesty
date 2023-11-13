const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('gwesty_system', '', '', {
    host: 'localhost',
    port: 8080,
    dialect: 'mysql'
});

try {
    sequelize.authenticate();
    console.log('Banco de dados conectado com sucesso!')
} catch (error) {
    console.error(error)
}

module.exports = sequelize;
