import{
    Column,
    CreateDateColumn,
    Entity,
    PrimaryColumn,
    UpdateDateColumn
}from 'typeorm'
import { v4 as uuid} from 'uuid';

export class User{
    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    password: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}