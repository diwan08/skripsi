const routes = require("express").Router()

// controller
const controller = require("../controlles/metodeController")
routes.post("/", controller.createData)

module.exports = routes