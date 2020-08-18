import Router from '@koa/router'

import loginController from '../controllers/login.controller'
import registerController from '../controllers/register.controller'
import recoverPasswordController from '../controllers/recover-password.controller'

import validationMiddleware from '../middlewares/validation.middleware'
import authValidator from '../validators/auth.validator'

const routes = new Router()

routes.post('/register',
    validationMiddleware(authValidator.register),
    registerController.store)

routes.post('/login',
    validationMiddleware(authValidator.login),
    loginController.show)

routes.post('/forgot-password',
    validationMiddleware(authValidator.forgotPassword),
    recoverPasswordController.show)

export default routes
