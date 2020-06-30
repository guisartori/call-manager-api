import Functionality from '../models/Functionality'
import { Request, Response } from 'express'
import knex from '../database/connection'

class FunctionalityController {
    static create = async (request: Request, response: Response) => {
        const functionalityData:Functionality = request.body
        const idFunctionality = await knex('functionalities').insert(functionalityData)
        return response.json(idFunctionality)
    }

    static all = async (request: Request, response: Response) => {
        const { project_id } = request.query
        const allFunctionalities = await knex<Functionality>('functionalities')
            .select()
            .where('project_id', String(project_id))
        
        return response.json(allFunctionalities)
    }
}

export default FunctionalityController