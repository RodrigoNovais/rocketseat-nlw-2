import crypt from 'bcryptjs'
import connection from '../database/connection'
import { SALT } from '../config'
import { generate } from '../helper/jsonwebtoken'

export type IUser = {
    id?: number

    name: string
    surname: string
    email: string
    password: string

    avatar?: string
    bio?: string
    whatsApp?: string
}

export const generateToken = async (id: NonNullable<IUser['id']>) => {
    const token = await generate({ id })

    return token
}

export const comparePassword = (original: string, target: string) => {
    return crypt.compareSync(target, original)
}

export const FindByEmail = async (email: string) => {
    const user = await connection('users')
        .where('users.email', '=', email)
        .select('users.*')
        .first()

    return user
}

export const FindById = async (id: NonNullable<IUser['id']>) => {
    const user = await connection('users')
        .where('users.id', '=', id)
        .select('users.*')
        .first()

    return user
}

export const Create = async (name: string, surname: string, email: string, password: string) => {
    const [user_id] = await connection('users')
        .insert({ name, surname, email, password: crypt.hashSync(password, SALT) })

    const user = await connection('users')
        .where('users.id', '=', user_id)
        .select('users.*')
        .first()

    return user
}

// const FindAllUsers = async () => {}

// const DeleteById = async () => {}

// const UpdateById = async () => {}

export default { FindByEmail, FindById, Create, comparePassword, generateToken }
