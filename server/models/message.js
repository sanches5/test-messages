require("dotenv").config()
const {Sequelize, TEXT} = require("sequelize");

const {
    PORT_DB: portDB,
    DATABASE: db,
    USER_NAME: userName,
    PASSWORD: password,
    HOST: host
} = process.env

const sequelize = new Sequelize({
    database: db,
    username: userName,
    password: password,
    host: host,
    port: portDB,
    dialect: db
});


const Messages = sequelize.define('Message', {
    text: TEXT
}, {
    freezeTableName: true
})

Messages.sync({force: false})

exports.Message = Messages;
