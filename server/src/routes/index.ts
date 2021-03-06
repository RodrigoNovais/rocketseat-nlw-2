import compose from 'koa-compose'
import Router from '@koa/router'

import auth from './auth'
import classes from './classes'
import connections from './connections'

function combine(...routers: Router[]) {
    if (!Array.isArray(routers))
        routers = [...arguments]

    const middleware: Array<any> = []

    routers.forEach(router => {
        middleware.push(router.routes())
        middleware.push(router.allowedMethods())
    })

    return compose(middleware)
}

export default combine(auth, connections, classes)
