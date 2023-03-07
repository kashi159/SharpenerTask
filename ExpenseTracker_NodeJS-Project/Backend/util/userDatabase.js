const Sequelize = require('sequelize');

const sequelize = new Sequelize('expense-tracker-app', 'root', 'Kashif@125', {
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize;