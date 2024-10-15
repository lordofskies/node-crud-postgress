const {pool, Pool} = require("pg");

const dotenv = require("dotenv");


dotenv.config({path: `./configs/.env.${process.env.NODE_ENV}`});

const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
})

module.exports = pool;