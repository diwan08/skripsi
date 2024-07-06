const routes = require("express").Router()

// controller
const controller = require("../controlles/kelasController")
routes.post("/", controller.create )

module.exports = routes