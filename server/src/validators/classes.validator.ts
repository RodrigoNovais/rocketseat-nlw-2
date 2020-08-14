import Joi from '@hapi/joi'
import { ValidatorParameter } from '../middlewares/validation.middleware'

export const index = {
    query: {
        schema: Joi.object().keys({
            week_day: Joi.number().min(0).max(6).required(),
            subject: Joi.string().required(),
            time: Joi.string().required(),
        }),
    } as ValidatorParameter,
}

export const store = {
    body: {
        schema: Joi.object().keys({
            name: Joi.string().max(255).required(),
            avatar: Joi.string().required(),
            whatsApp: Joi.string().max(20).required(),
            bio: Joi.string().max(1024).required(),
            subject: Joi.string().max(255).required(),
            cost: Joi.number().positive().required(),
            schedule: Joi.array().items(
                Joi.object().keys({
                    week_day: Joi.number().min(0).max(6).required(),
                    from: Joi.string().max(10).required(),
                    to: Joi.string().max(10).required(),
                })
            ),
        }),
    } as ValidatorParameter,
}

export default { index, store }
