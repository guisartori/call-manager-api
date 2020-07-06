import express from 'express'
import UserController from '../controllers/UserController'
import AuthController from '../controllers/AuthController'
import StatusController from '../controllers/StatusController'
import verifyAuthentication from '../middlewares/Auth'
import ProjectController from '../controllers/ProjectController'
import UserProjectController from '../controllers/UserProjectController'
import FunctionalityController from '../controllers/FunctionalityController'
import CallController from '../controllers/CallController'
import sendSuccess from '../helpers/sendSuccess'

const api = express.Router()

api.post('/', (req, res) => {
    return res.json(sendSuccess('Bem vindo ao sistema'))
})
api.post('/login', AuthController.login)
api.post('/sign-up', UserController.create, AuthController.login)
api.post('/forgot', AuthController.forgotPassword)
api.post('/logout', AuthController.logout)
api.get('/logado', verifyAuthentication, (req, res) => {
    res.json('tá logado bicho')
})
api.get('/status', verifyAuthentication, StatusController.all)
api.post('/project', verifyAuthentication, ProjectController.create, UserProjectController.create)
api.get('/project', verifyAuthentication, ProjectController.all)
api.post('/functionality', verifyAuthentication, FunctionalityController.create)
api.get('/functionality', verifyAuthentication, FunctionalityController.all)
api.get('/call', verifyAuthentication, CallController.all)
api.post('/call', verifyAuthentication, CallController.create)
api.get('/call/:id', verifyAuthentication, CallController.details)

export default api