const Joi = require('joi')

const register = Joi.object().keys({
    username: Joi.string().required(),
    phone: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required()
});

const login_auth = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required()
});

module.exports = {
    register,
    login_auth
}