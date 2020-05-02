import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AdoptionCat {
    @PrimaryGeneratedColumn()
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

    @Column({
        type: 'varchar',
        nullable: true,
        length: 50
    })
    color: string;
}