require("dotenv").config()
const Joi = require("joi");

module.exports = Joi.object({
    nis: Joi.number().required(),
    nama: Joi.string().required().trim(),
})