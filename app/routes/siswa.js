const routes = require("express").Router()

// controller
const controller = require("../controlles/siswaController")
routes.post("/", controller.createSiswa)

module.exports = routes