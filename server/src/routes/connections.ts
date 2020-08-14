import Router from '@koa/router'

import connectionsController from '../controllers/connections.controller'
import validationMiddleware from '../middlewares/validation.middleware'
import connectionsValidator from '../validators/connections.validator'

const routes = new Router({ prefix: '/connections' })

routes.get('/', connectionsController.index)

routes.post('/',
    validationMiddleware(connectionsValidator.store),
    connectionsController.store)

export default routes
