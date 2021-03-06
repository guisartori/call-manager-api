import { Request, Response } from "express";
import { Connection } from "typeorm";
import path from "path";
import { Call } from "../entity/Call";
import { Functionality } from "../entity/Functionality";

class CallController {
    static getCallsByProjectId = async (
        req: Request,
        res: Response,
        conn: Connection
    ) => {
        const { projectId } = req.params;
        const repo = conn.getRepository(Call);

        try {
            const calls = await repo
                .createQueryBuilder("c")
                .leftJoinAndSelect("c.project", "project")
                .leftJoinAndSelect("c.functionality", "functionality")
                .leftJoinAndSelect("c.commits", "commits")
                .orderBy("commits.id", "DESC")
                .where({ project: projectId })
                .getMany();

            const formattedCalls = calls.map((call) => {
                return {
                    call_id: call.id,
                    call_title: call.title,
                    call_creator_name: "Guilherme Sartori",
                    functionality_name: call.functionality.name,
                    call_description: call.description,
                    commits: call.commits,
                };
            });

            return res.json(formattedCalls);
        } catch (error) {
            const fileName = path.basename(__filename);
            const route = req.path;
            const method = req.method;

            res.status(500).json({
                error,
                fileName,
                route,
                method,
            });
        }
    };

    static create = async (req: Request, res: Response) => {
        const { title, description, projectId, functionality } = req.body;

        const __isNew__ = "__isNew__";
        let functionalityId = functionality;

        if (functionality.includes(__isNew__)) {
            const newFunc = new Functionality();
            newFunc.name = functionality.replace(__isNew__, "");
            newFunc.project = projectId;

            functionalityId = await newFunc.save().then((func) => func.id);
        }

        const call = new Call();
        call.title = title;
        call.description = description;
        call.project = projectId;
        call.functionality = functionalityId;

        try {
            call.save();
            return res.status(201).json({ msg: "Chamado criado com sucesso!" });
        } catch (error) {
            const fileName = path.basename(__filename);
            const route = req.path;
            const method = req.method;

            res.status(500).json({
                error,
                fileName,
                route,
                method,
            });
        }
    };
}

export default CallController;
