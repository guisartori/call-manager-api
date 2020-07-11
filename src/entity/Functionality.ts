import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Project } from "./Project";

@Entity("functionalities")
export class Functionality extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 200 })
    name: string

    @ManyToOne(type => Project, project => project.functionalities)
    project: Project
}