import express from 'express'
import session from 'express-session'
import passport from 'passport'
import api from './routes/api'
import cors from 'cors'
import auth from './config/auth'

const app = express()

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

app.listen(8000)