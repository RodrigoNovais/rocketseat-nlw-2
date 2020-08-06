import Router from 'koa-router'

import connectionsController from '../controllers/connections.controller'

const routes = new Router({ prefix: '/connections' })

routes.get('/', connectionsController.index)
routes.post('/', connectionsController.store)

export default routes
