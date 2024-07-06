const routes = require("express").Router();
const controller = require("../controlles/sppController");
const authorization = require("../middlewares/authorize")

routes.post("/",authorization,controller.create)

module.exports = routes;