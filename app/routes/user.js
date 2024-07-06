const routes = require("express").Router()

// controller
const controller = require("../controlles/user.controller");

routes.post("/", controller.register)
routes.post("/login", controller.login)
routes.post("/forgot-password", controller.forgotPassword)

module.exports = routes;