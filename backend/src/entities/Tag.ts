import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToMany, BeforeInsert } from "typeorm";
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
    createdAt!: Date;

    @Field( () => [Ad])
    @ManyToMany(
      () => Ad, 
      (ad) => ad.tags
    )
    ads!: Ad[];

    @BeforeInsert()
    updateDates() {
      this.createdAt = new Date();
    }
  }
  
  
  