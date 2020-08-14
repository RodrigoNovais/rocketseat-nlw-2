import Router from '@koa/router'

import classesController from '../controllers/classes.controller'

const routes = new Router({ prefix: '/classes' })

routes.get('/', classesController.index)

routes.post('/', classesController.store)

export default routes
