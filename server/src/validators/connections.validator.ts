import Joi from '@hapi/joi'
import { ValidatorParameter } from '../middlewares/validation.middleware'

export const store = {
    body: {
        schema: Joi.object().keys({
            user_id: Joi.number().required(),
        }),
    } as ValidatorParameter,
}

export default { store }
