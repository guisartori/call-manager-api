import bcrypt from 'bcrypt'
import passportLocal from 'passport-local'
import { PassportStatic } from 'passport'
import User from '../models/User'
import UserController from '../controllers/UserController'

const LocalStrategy = passportLocal.Strategy

const auth = (passport: PassportStatic) => {

    // //TODO: FAZER TRATAMETO DE TODAS AS POSSIBILIDADES DE ERRO
    // passport.serializeUser((user: User, done) => {
    //     done(null, user.id)
    // })

    // passport.deserializeUser((id: number, done) => {
    //     UserController.findUserById(id, (data: User) => {
    //         done(null, data)
    //     })
    // })

    // passport.use(new LocalStrategy({
    //     usernameField: 'email',
    //     passwordField: 'password'
    // }, (email, password, done) => {
    //     UserController.findUser(email, user => {
    //         if(!user){
    //             return done(null, false)
    //         }

    //         bcrypt.compare(password, String(user.password), (error, isValid) => {
    //             if (error) return done(error)
    //             if (!isValid) return done(null, false)
    //             return done(null, user)
    //         })
    //     })
    // }))
}

export default auth