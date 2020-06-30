import { Response, Request, NextFunction } from "express"
import knex from '../database/connection'
import Project from "../models/Project"
import User from "../models/User"
import Call from "../models/Call"

class ProjectController {

    static create = async (request: Request, response: Response, next: NextFunction) => {
        const { title, user_id } = request.body
        const project_id = await knex<Project>('projects').insert({title})
        request.body = { user_id, project_id: project_id[0] }
        // response.json(request.body)
        next()
    }

    static all = async (request: Request, response: Response) => {
        // const userId = request.user?.[0].id
        
        //TODO: COLOCAR NO RETORNO: QTD NOVOS CALLS E PERCENT CONCLUIDO
        let allProjects: Project[] = await knex('projects as p')
            .select('p.id', 'p.title')
            .leftJoin('users_projects as up', 'p.id', 'up.project_id')
            .leftJoin('users as u', 'up.user_id', 'u.id')
            // .where({'u.id': Number(userId)})

        let itemsProcessed = 0;

        allProjects.map(async (project, i, arr) => {
            const calls = await knex('calls as c')
                .leftJoin('call_commits as cc', 'c.id', 'cc.call_id')
                .where('c.project_id', project.id)
                .where('c.new', 1)
                .count('* as counter_new_calls')
                .select('')
                .first()
                
            allProjects[i].counter_new_calls = Number(calls?.counter_new_calls)
            itemsProcessed++
            if(itemsProcessed === arr.length) {
                callback();
            }
                // response.json(allProjects)
        })

        
        const callback = () => { return response.json(allProjects) }
    }

}

export default ProjectController