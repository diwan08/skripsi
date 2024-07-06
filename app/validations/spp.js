const Joi = require("joi");

module.exports = Joi.object({
    tahun : Joi.number().required(),
    nominal : Joi.number().required()
})