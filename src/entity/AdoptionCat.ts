import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AdoptionCat {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        type: 'varchar',
        nullable: false,
        length: 50
    })
    name: string;

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
}