import { Arg, Field, ID, InputType, Mutation, Query, Resolver } from "type-graphql";
import { Ad } from "../entities/Ad";
import { Category } from "../entities/Category";
import { Tag } from "../entities/Tag";
import { In, Like } from "typeorm";

@InputType()
export class AdInput {

  @Field()
  title!: string;

  @Field()
  description!: string;
  
  @Field()
  owner!: string;

  @Field()
  price!: number;

  @Field()
  picture!: string;

  @Field()
  location!: string;

  @Field(() => ID)
  category!: Category;

  @Field(() => [ID])
  tags!: Tag[];
  
}

@Resolver(Ad)
export class AdResolver {

  @Query(() => [Ad])
  async getAds(@Arg("needle", { nullable: true }) needle?: string) {
    let whereClause = {}
    if (needle) {
        whereClause = { 
            title: Like(`%${needle}%`) 
          }
        }
    const ads = await Ad.find({ 
      where: whereClause,
      relations: ["category", "tags"] });
    return ads
  }

  @Query(() => Ad)
  async getAdById(@Arg("id") id: string) {
    const ad = await Ad.findOneOrFail({
      where: {id},
      relations: ["category", "tags"]
    })
    return ad
  }

  @Query(() => [Ad])
  async getAdByCategoryId (@Arg("id") id: string) {
    const ad = await Ad.find({
      where: {category: {id}},
      relations: ["category", "tags"]
    })
    return ad
  }

  @Mutation(() => Ad)
  async createdAd(@Arg("data") data: AdInput) {
    let ad = new Ad()
    ad = Object.assign(ad, data);
    const tags = await Tag.findBy({id: In(data.tags)  })
    ad.tags = tags;
    
    await ad.save()
    return ad;
  }

  @Mutation(() => Boolean)
  async deleteAdById(@Arg("id") id: string) {
    return (await Ad.delete({id})).affected
  }

  @Mutation(() => Ad)
  async replaceAdById(@Arg("adId") id: string, @Arg("data") data: AdInput ) {
    let ad = await Ad.findOneByOrFail({id})
    ad = Object.assign(ad, data)
    const tags = await Tag.findBy({id: In(data.tags)  })
    ad.tags = tags;

    await ad.save()
    return ad;
  }

}