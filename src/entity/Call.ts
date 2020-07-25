import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, BaseEntity, OneToOne, JoinColumn, OneToMany } from "typeorm"
import { Project } from "./Project"
import { Functionality } from "./Functionality"
import { Commit } from "./Commit"

@Entity("calls")
export class Call extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 200 })
    title: string

    @Column("text")
    description: string

    @ManyToOne(type => Project, project => project.calls)
    project: Project

    @OneToMany(type => Commit, commit => commit.call)
    commits: Commit[]

    @OneToOne(type => Functionality)
    @JoinColumn()
    functionality: Functionality;
}