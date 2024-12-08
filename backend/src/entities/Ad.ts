import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinTable, BeforeInsert } from "typeorm";
import "reflect-metadata";
import { Category } from "./Category";
import { Tag } from "./Tag";
import { Field, ObjectType } from "type-graphql";
  
  @Entity()
  @ObjectType()
  export class Ad extends BaseEntity {
    @PrimaryGeneratedColumn()
    @Field()
    id!: string;
  
    @Column({ length: 100 })
    @Field()
    title!: string;
  
    @Column()
    @Field()
    description!: string;
    
    @Column()
    @Field()
    owner!: string;
  
    @Column()
    @Field()
    price!: number;

    @Column()
    @Field()
    picture!: string;

    @Column()
    @Field()
    location!: string;

    @Column()
    @Field()
    createdAt!: Date;

    @Field(() => Category)
    @ManyToOne(() => Category, (category) => category.ads
    )
    category!: Category;

    @Field(() => [Tag])
    @ManyToMany(
      () => Tag, 
      (tag) => tag.ads
    )
    @JoinTable()
    tags!: Tag[];

    @BeforeInsert()
    updateDates() {
      this.createdAt = new Date();
    }

  }
  
  
  
  