import { Response, Request } from "express"
import { Connection } from "typeorm"
import { Project } from "../entity/Project"
import path from 'path'

class ProjectController {

    static create = async (
        req: Request,
        res: Response
    ) => {
        const { title } = req.body
        const project = new Project()
        project.title = title
        try {
            await project.save()
            return res.status(201).json({ msg: "Projeto criado com sucesso!" })

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

    static all = async (req: Request, res: Response, conn: Connection) => {
        // const userId = request.user?.[0].id
        const repo = conn.getRepository(Project)
        try {
            const projects = await repo.find()
            return res.json(projects)

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

export default ProjectController