import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, BeforeInsert, OneToMany } from "typeorm";
import { Field, ObjectType } from "type-graphql";
import { User } from "./User";
  

  @Entity()
  @ObjectType()
  export class Roles extends BaseEntity {
    @PrimaryGeneratedColumn()
    @Field()
    id!: string;
  
    @Field()
    @Column({ length: 100 })
    name!: string;

    @Field()
    @Column()
    createdAt!: Date;

    @Field(() => [User])
    @OneToMany(() => User, (user) => user.roles
    )
    users!: User[];

    @BeforeInsert()
    updateDates() {
      this.createdAt = new Date();
    }
  }
  
  
  