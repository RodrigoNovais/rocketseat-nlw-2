import { Context, Next } from 'koa'
import User from '../models/user'

export const store = async (context: Context, next: Next) => {
    const { name, surname, email, password } = context.request.body

    const exists = await User.FindByEmail(email)

    if (exists) {
        context.status = 409
        context.body = 'User already exists'

        return next()
    }

    const user = await User.Create(name, surname, email, password)
    const token = await User.generateToken(user.id)

    delete user.password

    context.status = 201
    context.body = user
    context.set('authorization', token)

    return next()
}

export default { store }
