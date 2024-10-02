import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Ad } from "./Ad";
  
  @Entity()
  export class Category extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;
  
    @Column({ length: 100 })
    name!: string;

    @Column()
    createdAt!: string;

    @OneToMany(() => Ad, (ad) => ad.category
    )
    ads!: Ad[];
  
  }
  

  // '!' veut dire champ obligatoire
  
  
  