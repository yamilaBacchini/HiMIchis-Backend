import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm';
import {Location} from "./Location";
import {Locality} from "./Locality";

@Entity()
export class Province {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        nullable: false,
        length: 50
    })
    name: string;

    @OneToMany(type => Locality, locality => locality.province)
    localities: Locality[];
}