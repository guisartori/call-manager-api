import "reflect-metadata";
import { createConnection } from "typeorm";
import express from 'express'
// import session from 'express-session'
// import passport from 'passport'
import api from './routes/api'
import cors from 'cors'
// import auth from './config/auth'
import { Call } from './entity/Call'

createConnection().then(async connection => {
    const app = express()

    app.use(
        express.Router().get('/teste', async (req, res) => {
            // const call = new Call()
            const callRep = connection.getRepository(Call)
            const calls = await callRep.find({ relations: ['project'] })
            return res.json(calls)
        })
    )

    // auth(passport)
    // app.use(
    //     session({
    //         secret: 'call-manager',
    //         resave: false,
    //         saveUninitialized: false
    //     })
    // )

    // app.use(passport.initialize())
    // app.use(passport.session())
    app.use(cors())
    app.use(express.json())
    app.use(api)
    app.listen(process.env.PORT || 3333)

}).catch(error => console.log(error));
