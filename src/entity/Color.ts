import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class Color {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        nullable: false,
        length: 50
    })
    name: string;
}