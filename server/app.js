require("dotenv").config()
const express = require('express')
const { Sequelize } = require('sequelize')
const bodyParser = require('body-parser');
const {route} = require("./routes/message");

const {
    PORT_SERVER: portServer,
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
})

const app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use( function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    next();
});

app.use(route)

app.listen(portServer, async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

})