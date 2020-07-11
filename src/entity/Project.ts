import { Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity } from "typeorm";
import { Call } from "./Call";
import { Functionality } from "./Functionality";

@Entity("projects")
export class Project extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 200
    })
    title: string

    @OneToMany(type => Call, call => call.project)
    calls: Call[]

    @OneToMany(type => Functionality, functionality => functionality.project)
    functionalities: Functionality[]
}