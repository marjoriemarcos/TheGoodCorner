import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToMany } from "typeorm";
import { Ad } from "./Ad";
import { Field, ObjectType } from "type-graphql";
  

  @Entity()
  @ObjectType()
  export class Tag extends BaseEntity {
    @PrimaryGeneratedColumn()
    @Field()
    id!: string;
  
    @Field()
    @Column({ length: 100 })
    name!: string;

    @Field()
    @Column()
    createdAt!: string;

    @ManyToMany(
      () => Ad, 
      (ad) => ad.tags
    )
    ads!: Ad[];

  }
  

  // '!' veut dire champ obligatoire
  
  
  