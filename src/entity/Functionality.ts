import {
    BaseEntity,
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    OneToMany,
} from "typeorm";
import { Project } from "./Project";
import { Call } from "./Call";

@Entity("functionalities")
export class Functionality extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 200 })
    name: string;

    @ManyToOne((type) => Project, (project) => project.functionalities)
    project: Project;

    @OneToMany((ype) => Call, (call) => call.functionality)
    calls: Call[];
}
