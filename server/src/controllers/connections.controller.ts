import { Context, Next } from 'koa'
import connection from '../database/connection'

export const index = async (context: Context, next: Next) => {
    const totalConnections = await connection('connections')
        .count('* as total')

    const [{ total }] = totalConnections

    context.body = { total }

    return next()
}

export const store = async (context: Context, next: Next) => {
    const { user_id } = context.request.body

    await connection('connections')
        .insert({ user_id })

    context.status = 201

    return next()
}

export default { index, store }
