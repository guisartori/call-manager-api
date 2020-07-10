import { Response, Request, NextFunction } from "express"
import knex from '../database/connection'
import Project from "../models/Project"
import Knex from "knex"

class ProjectController {

    static create = async (request: Request, response: Response, next: NextFunction) => {
        const { title, user_id } = request.body
        const project_id = await knex<Project>('projects').insert({ title })
        request.body = { user_id, project_id: project_id[0] }
        // response.json(request.body)
        next()
    }

    static all = async (request: Request, response: Response) => {
        // const userId = request.user?.[0].id
        const userId = 1

        //TODO: COLOCAR NO RETORNO: QTD NOVOS CALLS E PERCENT CONCLUIDO
        try {

            const projects =
                await knex({ p: 'projects' })
                    .select('p.id', 'p.title', { total_new_calls: 1 })
                    .count({ total_calls: 'c.id' })
                    .groupBy('p.id', 'p.title', 'total_new_calls')
                    .leftJoin({ up: 'users_projects' }, 'up.project_id', 'p.id')
                    .leftJoin({ c: 'calls' }, 'c.project_id', 'p.id')
                    .where({ 'up.user_id': Number(userId) })


            return response.json(projects)
        } catch (err) {
            return response.json({ error: err })
        }


        // let itemsProcessed = 0;

        // allProjects.map(async (project, i, arr) => {
        //     const calls = await knex('calls as c')
        //         .leftJoin('call_commits as cc', 'c.id', 'cc.call_id')
        //         .where('c.project_id', project.id)
        //         // .where('c.new', 1)
        //         .count('* as counter_new_calls')
        //         .select('')
        //         .first()

        //     allProjects[i].counter_new_calls = Number(calls?.counter_new_calls)
        //     itemsProcessed++
        //     if (itemsProcessed === arr.length) {
        //         callback();
        //     }
        // response.json(allProjects)
        // })


        // const callback = () => { return response.json(allProjects) }
    }

}

export default ProjectController