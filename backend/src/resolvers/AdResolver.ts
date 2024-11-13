import { Arg, Field, InputType, Mutation, Query, Resolver } from "type-graphql";
import { Ad } from "../entities/Ad";

@InputType()
export class AdInput {
  @Field()
  id!: string;

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

  @Field()
  createdAt!: string;
}

@Resolver(Ad)
export class AdResolver {
  @Query(() => [Ad])
  async getAds() {
    const ads = await Ad.find();
    return ads
  }

  @Query(() => [Ad])
  async getAdById(@Arg("id") id: string) {
    const ad = await Ad.findOneByOrFail({id})
    return ad
  }

  @Mutation(() => Ad)
  async addAd(@Arg("data") { title, description, owner, price, picture, location, createdAt }: AdInput) {
    const ad = new Ad()
    ad.title=title
    ad.description=description
    ad.owner=owner
    ad.price=price
    ad.picture=picture
    ad.location=location
    ad.createdAt=createdAt
    await ad.save()
    return ad;
  }
}