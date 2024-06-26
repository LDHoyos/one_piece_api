const { Sequelize } = require('sequelize');

const DB_NAME = 'one_piece';
const DB_USER = 'root';
const DB_PASS = 'Leinerhc_20@';

export const database = new Sequelize(
    DB_NAME,
    DB_USER,
    DB_PASS,
    {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    }
);

async function generateDb() {
    await database.sync({ force: true });
    console.log('Base de datos y tablas creadas');
}

generateDb();
