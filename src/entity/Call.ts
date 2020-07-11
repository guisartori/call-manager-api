import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, BaseEntity, OneToOne, JoinColumn } from "typeorm"
import { Project } from "./Project"
import { Functionality } from "./Functionality"

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

    @OneToOne(type => Functionality)
    @JoinColumn()
    functionality: Functionality;

    @ManyToOne(type => Project, project => project.calls)
    project: Project
}