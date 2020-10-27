require('dotenv').config();


module.exports = {
    DEV_DATABASE_URL: process.env.DEV_DATABASE_URL,
    TEST_DATABASE_URL: process.env.TEST_DATABASE_URL,
    DATABASE_URL: process.env.DATABASE_URL,
    jwtSecret: process.env.jwtSecret, 
    USER_MAIL: process.env.USER_MAIL,
    PASSWORD_MAIL: process.env.PASSWORD_MAIL,
    API_CONSUME_URL: process.env.API_CONSUME_URL,
}