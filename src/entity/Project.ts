import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Call } from "./Call";

@Entity("projects")
export class Project {

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 200
    })
    title: string

    @OneToMany(type => Call, call => call.project)
    calls: Call[]
}