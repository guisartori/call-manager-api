import { Request, Response, NextFunction } from 'express';
import sendAlert from '../helpers/sendAlert'

const verifyAuthentication = (request: Request, response: Response, next: NextFunction) => {
    if(request.isAuthenticated()){
        return next()
    }
    return response.json(sendAlert('Faça login para continuar...'))
}

export default verifyAuthentication