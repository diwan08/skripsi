const Joi = require("joi");

module.exports = Joi.object({
    email: Joi.string().required().trim(),
    password: Joi.string().required().trim()
})