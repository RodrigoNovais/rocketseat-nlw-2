import { Context, Next } from 'koa'
import { verify } from '../helper/jsonwebtoken'
import User, { IUser } from '../models/user'

export type AuthState = {
    id: NonNullable<IUser['id']>
}

export default async (context: Context, next: Next) => {
    const authorization = context.get('Authorization')

    if (!authorization) {
        context.status = 401
        context.body = { error: 'No token provided' }

        return next()
    }

    const [scheme, token] = authorization.split(' ')

    if (!token) {
        context.status = 401
        context.body = { error: 'No token provided' }

        return next()
    }

    if (!/^Bearer$/i.test(scheme)) {
        context.status = 401
        context.body = { error: 'Token malformed' }

        return next()
    }

    try {
        const { id } = await verify(token) as any

        if (!id) {
            context.status = 401
            context.body = { error: 'Token malformed' }

            return next()
        }

        const user = await User.FindById(id)

        if (!user) {
            context.status = 401
            context.body = { error: 'Invalid token' }

            return next()
        }

        context.state.user = user

        return next()
    } catch {
        context.status = 401
        context.body = { error: 'Invalid token' }

        return
    }
}
