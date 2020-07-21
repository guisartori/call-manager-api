import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity } from "typeorm";
import { Call } from "./Call";

@Entity("commits")
export class Commit extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    comment: string

    @ManyToOne(type => Call, call => call.commits)
    call: Call

    @Column({ length: 10 })
    fromStatus: string

    @Column({ length: 10 })
    toStatus: string
}