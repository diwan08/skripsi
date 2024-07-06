const Joi = require("joi");

module.exports = Joi.object({
    metode_pembayaran : Joi.string().trim().required()
})