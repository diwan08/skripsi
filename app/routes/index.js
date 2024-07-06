const routes = require("express").Router();

// middlewares
const authorize = require("../middlewares/authorize.js");

// list all routes 
routes.use("/v1/user", require("./user.js"))
routes.use("/v1/spp", require("./spp.js"))
routes.use("/v1/kelas",authorize, require("./kelas.js"))
routes.use("/v1/siswa",authorize, require("./siswa.js"))
routes.use("/v1/metode",authorize, require("./siswa.js"))

module.exports = routes;