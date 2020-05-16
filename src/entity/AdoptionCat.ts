import {Entity, Column, PrimaryGeneratedColumn, JoinTable, ManyToMany, ManyToOne} from 'typeorm';
import {Color} from "./Color";
import {Locality} from "./Locality";
import {Location} from "./Location";

@Entity()
export class AdoptionCat {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        nullable: false,
        length: 50
    })
    name: string;

    @Column({
        type: 'varchar',
        length: 500
    })
    description: string;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    dateOfBirth: Date;

    @Column({
        type: 'int',
        nullable: false
    })
    age: number;

    @Column({
        type: 'varchar',
        nullable: false,
        length: 50
    })
    gender: string;

    @ManyToMany(type => Color)
    @JoinTable()
    colors: Color[];

    @ManyToOne(type => Location, location => location.adoptionCats)
    location: Location;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    createdAt: Date;
}