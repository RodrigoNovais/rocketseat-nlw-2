import Joi from '@hapi/joi'
import { ValidatorParameter } from '../middlewares/validation.middleware'

export const forgotPassword = {
    body: {
        schema: Joi.object().keys({
            email: Joi.string().max(255).email().required(),
        }),
    } as ValidatorParameter,
}

export const login = {
    body: {
        schema: Joi.object().keys({
            email: Joi.string().max(255).email().required(),
            password: Joi.string().max(255).required(),
        }),
    } as ValidatorParameter,
}

export const register = {
    body: {
        schema: Joi.object().keys({
            name: Joi.string().max(255).required(),
            surname: Joi.string().max(255).required(),
            email: Joi.string().max(255).email().required(),
            password: Joi.string().max(255).required(),
        })
    } as ValidatorParameter,
}

export default { login, register, forgotPassword }
