import { Request, Response } from 'express'
import { Connection } from 'typeorm'
import { Functionality } from '../entity/Functionality'
import path from 'path'

class FunctionalityController {
    static create = async (req: Request, res: Response) => {
        const { name, projectId } = req.body
        const functionality = new Functionality()
        functionality.name = name
        functionality.project = projectId

        try {
            await functionality.save()
            return res.status(201).json({ msg: "Nova funcionalidade salva!" })

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

    static getFunctionalitiesByProjectId = async (
        req: Request,
        res: Response,
        conn: Connection
    ) => {
        const { projectId } = req.params
        const repo = conn.getRepository(Functionality)
        try {

            const functionalities = await repo
                .createQueryBuilder("f")
                .leftJoinAndSelect("f.project", "project")
                .where({ "project": projectId })
                .getMany()
            const mappedFunctionalities = functionalities.map(functionality => {
                return {
                    value: functionality.id,
                    label: functionality.name
                }
            })

            return res.json(mappedFunctionalities)

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

export default FunctionalityController