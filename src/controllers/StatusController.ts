import { Request, Response } from "express"
import knex from '../database/connection'
import Status from '../models/Status'

class StatusController {

    static all = async (request: Request, response: Response) => {
        const allStatus = await knex<Status>('status').select()
        return response.json(allStatus)
    }

}

export default StatusController