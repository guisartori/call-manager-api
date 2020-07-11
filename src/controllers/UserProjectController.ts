// import knex from '../database/connection'
import UserProject from '../models/UserProject'
import { Response, Request } from 'express'
import sendSuccess from '../helpers/sendSuccess'

class UserProjectController {

    // static create = async (request: Request, response: Response) => {
    //     const { user_id, project_id } = request.body
    //     await knex<UserProject>('users_projects').insert({user_id, project_id})
    //     return response.json(sendSuccess('Projeto cadastrado com sucesso'))
    // }

}

export default UserProjectController