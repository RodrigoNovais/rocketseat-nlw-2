import { Context, Next } from 'koa'
import User from '../models/user'

export const show = async (context: Context, next: Next) => {
    const { email, password } = context.request.body

    const user = await User.FindByEmail(email)

    if (user && User.comparePassword(user.password, password)) {
        delete user.password

        const token = await User.generateToken(user.id)

        context.body = user
        context.set('authorization', token)

        return next()
    }

    context.status = 404
    context.body = 'User not found'

    return next()
}

export default { show }
