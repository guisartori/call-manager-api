import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, BaseEntity } from "typeorm"
import { Project } from "./Project"

@Entity("calls")
export class Call extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 200 })
    title: string

    @Column("text")
    description: string

    // @Column()
    // functionality_id: number

    // @Column()
    // responsable_id: number

    // @Column()
    // creator_id: number

    @ManyToOne(type => Project, project => project.calls)
    project: Project
}