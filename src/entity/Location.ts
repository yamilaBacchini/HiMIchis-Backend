import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany} from 'typeorm';
import {Locality} from "./Locality";
import {AdoptionCat} from "./AdoptionCat";
import {User} from "./User";

@Entity()
export class Location {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => Locality, locality => locality.locations)
    locality: Locality;

    @Column({
        type: 'varchar',
        nullable: false,
        length: 100
    })
    street: string;

    @Column({
        type: 'int',
        nullable: false
    })
    number: number;

    @OneToMany(type => AdoptionCat, adoptionCat => adoptionCat.location)
    adoptionCats: AdoptionCat[];

    @ManyToOne(type => User, user => user.locations)
    user: User;
}