import { Request, Response } from 'express';
import { Commit } from '../entity/Commit';
import path from 'path'
import { Status } from '../entity/Status';

class CommitController {
    static create = async (req: Request, res: Response) => {
        const { comment, callId, status } = req.body
        const commit = new Commit()
        commit.comment = comment
        commit.call = callId
        commit.status = Status(status)
        try {
            await commit.save()
            return res.json({ msg: 'Comentário adicionado com sucesso!' }).status(201)
        } catch (error) {
            const fileName = path.basename(__filename)
            const route = req.path
            const method = req.method

            res.status(500).json({
                error,
                fileName,
                route,
                method
            })
        }
    }
}

export default CommitController