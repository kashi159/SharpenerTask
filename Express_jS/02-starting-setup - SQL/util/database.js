const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Kashif@125', {
    dialect: 'mysql',
     host: 'localhost'
    });

    module.exports = sequelize;