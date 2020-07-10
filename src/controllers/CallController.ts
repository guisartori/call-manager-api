import { Request, Response } from "express"
import knex from '../database/connection'
import Call from "../models/Call"
import CallCommitsController from "./CallCommitsController"
import CallCommit from "../models/CallCommit"

class CallController {

    static create = async (request: Request, response: Response) => {
        const { title,
            description,
            functionality_id,
            responsable_id,
            creator_id,
            project_id } = request.body

        try {
            const callId = await knex<Call>('calls').insert({
                title,
                description,
                functionality_id,
                responsable_id,
                creator_id,
                project_id
            })
            CallCommitsController.create(description, creator_id, 1)
            return response.json(callId)
        } catch (error) {
            return response.json(error)
        }



    }

    static all = async (request: Request, response: Response) => {
        const { project_id } = request.query
        const allCalls = await knex<Call>()
            .select('c.title', 'c.description', 'f.name AS functionality', 'u.name AS responsable')
            .from('calls AS c')
            .leftJoin('functionalities AS f', 'c.functionality_id', 'f.id')
            .leftJoin('users AS u', 'c.responsable_id', 'u.id')
            .where('c.project_id', String(project_id))
        // console.log(project_id)
        // const callsFormated = allCalls.map(call => {
        //     call.commits =
        // })
        //TODO: COLOCAR OS COMMITS EM CADA CALL
        return response.json(allCalls)
    }

    static details = async (request: Request, response: Response) => {
        const { id } = request.params
        const call = await knex<Call>('calls').select().where('id', id)
        return response.json(call)
    }

    static commits = async (projectId: number) => {
        const commits = knex<CallCommit>('call_commits').select().where('project_id', projectId)
        return commits
    }

}

export default CallController