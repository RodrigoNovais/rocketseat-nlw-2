import Router from '@koa/router'

import classesController from '../controllers/classes.controller'
import validationMiddleware from '../middlewares/validation.middleware'
import classesValidator from '../validators/classes.validator'

const routes = new Router({ prefix: '/classes' })

routes.get('/',
    validationMiddleware(classesValidator.index),
    classesController.index)

routes.post('/',
    validationMiddleware(classesValidator.store),
    classesController.store)

export default routes
