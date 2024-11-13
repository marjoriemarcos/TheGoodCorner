import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Ad } from "./Ad";
import { Field, ObjectType } from "type-graphql";
  @Entity()
  @ObjectType()
  export class Category extends BaseEntity {
    @PrimaryGeneratedColumn()
    @Field()
    id!: string;
  
    @Field()
    @Column({ length: 100 })
    name!: string;

    @Field()
    @Column()
    createdAt!: string;

    @OneToMany(() => Ad, (ad) => ad.category
    )
    ads!: Ad[];
  
  }
  

  // '!' veut dire champ obligatoire
  
  
  