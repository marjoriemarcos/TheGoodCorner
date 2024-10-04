import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToMany } from "typeorm";
import { Ad } from "./Ad";
  
  @Entity()
  export class Tag extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;
  
    @Column({ length: 100 })
    name!: string;

    @Column()
    createdAt!: string;

    @ManyToMany(
      () => Ad, 
      (ad) => ad.tags
    )
    ads!: Ad[];

  }
  

  // '!' veut dire champ obligatoire
  
  
  