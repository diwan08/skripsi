require("dotenv").config()
const Joi = require("joi");

module.exports  = Joi.object({
    nama_kelas  : Joi.string().required().trim()
})