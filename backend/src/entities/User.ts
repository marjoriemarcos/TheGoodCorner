import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Field, ObjectType } from "type-graphql";
import { Roles } from "./Roles";
  

  @Entity()
  @ObjectType()
  export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    @Field()
    id!: string;
  
    @Field()
    @Column({ length: 100 })
    name!: string;

    @Field()
    @Column({ unique: true })
    email!: string;

    @Field()
    @Column({ nullable: false})
    hashedPassword!: string;

    @Field(() => Roles)
    @ManyToOne(() => Roles, (roles) => roles.users
    )
    roles!: Roles;
  }
  
  
  