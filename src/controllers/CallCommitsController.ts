import knex from '../database/connection'
import CallCommit from '../models/CallCommit'
import { Request, Response } from 'express';
import sendSuccess from '../helpers/sendSuccess';

class CallCommitsController {
    static create = async (comment: string, commiter_id: number, status_id: number) => {
        await knex<CallCommit>('call_commits').insert({comment, commiter_id, status_id})
        return true;
    }

    static commit = async (request: Request, response: Response) => {
        const callCommit = request.body
        await knex<CallCommit>('call_commits').insert(callCommit)
        response.json(sendSuccess('Comentário adicionado com sucesso!'))
    }
}

export default CallCommitsController