import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, OneToMany, BeforeInsert } from "typeorm";
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
    createdAt!: Date;

    @Field(() => [Ad])
    @OneToMany(() => Ad, (ad) => ad.category
    )
    ads!: Ad[];

    @BeforeInsert()
    updateDates() {
      this.createdAt = new Date();
    }
  
  }
  

  // '!' veut dire champ obligatoire
  
  
  