import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany} from 'typeorm';
import {Location} from "./Location";
import {Province} from "./Province";

@Entity()
export class Locality {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        nullable: false,
        length: 50
    })
    name: string;

    @ManyToOne(type => Province, province => province.localities)
    province: Province;

    @OneToMany(type => Location, location => location.locality)
    locations: Location[];
}