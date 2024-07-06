require("dotenv").config()
const express = require("express");
const compression = require("compression");
const cors        = require("cors");
const boom        = require("express-boom");
const logger      = require("morgan");

const app = express();

app.use(logger("dev"));
app.use(boom())
app.use(cors({
    origin: "*",
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'PACTH'],
    allowedHeaders: ['Authorization', 'Content-type', 'Accept'],
    credentials: true
}));
app.use(compression({ level: 1 }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// define route 
app.use(require("./app/routes"));
app.listen(process.env.PORT, () => console.log(`server running in port ${process.env.PORT }`));

module.exports = app; 