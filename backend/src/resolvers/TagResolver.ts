import { Arg, Field, InputType, Mutation, Query, Resolver } from "type-graphql";
import { Tag } from "../entities/Tag";

@InputType()
export class TagInput {
  @Field()
  id!: string;

  @Field()
  name!: string;
  
  @Field()
  createdAt!: string;

}

@Resolver(Tag)
export class TagResolver {
  @Query(() => [Tag])
  async getTags() {
    const tags = await Tag.find();
    return tags
  }

  @Query(() => [Tag])
  async getTagById(@Arg("id") id: string) {
    const tag = await Tag.findOneByOrFail({id})
    return tag
  }

  @Mutation(() => Tag)
  async addTag(@Arg("data") { name, createdAt }: TagInput) {
    const tag = new Tag()
    tag.name=name
    tag.createdAt=createdAt
    await tag.save()
    return tag;
  }
}