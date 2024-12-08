import { Arg, Field, ID, InputType, Mutation, Query, Resolver } from "type-graphql";
import { Tag } from "../entities/Tag";
import { Ad } from "../entities/Ad";

@InputType()
export class TagInput {

  @Field()
  name!: string;

  @Field(() => ID)
  ads!: Ad;

}

@Resolver(Tag)
export class TagResolver {
  @Query(() => [Tag])
  async getTags() {
    const tags = await Tag.find({ relations: ["ads"] });
    return tags
  }

  @Query(() => [Tag])
  async getTagById(@Arg("id") id: string) {
    const tag = await Tag.findOneByOrFail({id})
    return tag
  }

  @Mutation(() => Tag)
  async createdTag(@Arg("data") { name }: TagInput) {
    const tag = new Tag()
    tag.name=name
    await tag.save()
    return tag;
  }

  @Mutation(() => Boolean)
  async deleteTagById(@Arg("id") id: string) {
    return (await Tag.delete({id})).affected
  }

  @Mutation(() => Tag)
  async replaceTagById(@Arg("adId") id: string, @Arg("data") data: TagInput ) {
    let tag = await Tag.findOneByOrFail({id})
    tag = Object.assign(tag, data)

    await tag.save()
    return tag;
  }
}