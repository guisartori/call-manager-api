import knex from '../database/connection'
import bcrypt from 'bcrypt'
import User from '../models/User'
import { Request, Response, NextFunction } from 'express'
import mail from '../config/mail'

class UserController {

    static findUser = async (email: string, callback?: (user: User | undefined) => void) => {
        try {
            const user = await knex<User>('users').where('email', `${email}`).first()
            callback ? callback(user) : console.log('testando')
            return user
        } catch (e){
            //TODO: ENVIAR ERRO VIA API
            console.log('**********************procurando usuário**********************', e)
        }
    }

    static findUserById = async (id: number, callback: (data: any) => void) => {
        const user = await knex<User>('users').where('users.id', `${id}`)
        callback(user)
    }

    static create = async (request: Request, response: Response, next: NextFunction) => {
        const user:User = request.body
        //TODO: passar para hash async e colocar as validações trycatch
        user.password = bcrypt.hashSync(user.password, 10)
        const id = await knex('users').insert(user)
        mail(String(user.email), 'Bem-vindo', `Olá, ${user.name}. Seja muito bem vindo ao nosso sistema`)
        response.json({id: id})
        next()
    }

    static changePassword = async (email:string, password: string) => {
        password = bcrypt.hashSync(password, 10)
        await knex<User>('users')
            .where({email})
            .update({
                password
            })
    }

}

export default UserController