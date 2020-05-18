import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Location} from "./Location";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false
    })
    username: string;

    @Column({
        nullable: false
    })
    password: string;

    @OneToMany(type => Location, location => location.user)
    locations: Location[];

}