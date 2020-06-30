import passport from "passport"
import { Request, Response, NextFunction } from "express"
import UserController from "./UserController"
import generateRadomString from '../helpers/generateRadomString'
import mail from "../config/mail"

class AuthController {

    static login = passport.authenticate('local', {successRedirect: '/logado', failureRedirect: '/login?fail=true'})

    static forgotPassword = async (request: Request, response: Response, next: NextFunction) => {
        const { email } = request.body 
        const user = await UserController.findUser(email)
        const newPassword = generateRadomString()
        UserController.changePassword(email, newPassword)
        mail(String(email), 'Mudança de senha', `Olá, ${user?.name}. Sua nova senha é: ${newPassword}`)
        return response.json('ta top')
    }

    static logout = (request: Request, response: Response) => {
        request.logOut()
        return response.json('tá deslogado manolo')
    }

}

export default AuthController