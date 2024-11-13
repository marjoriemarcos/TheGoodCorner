import { Arg, Field, InputType, Mutation, Query, Resolver } from "type-graphql";
import { Category } from "../entities/Category";

@InputType()
export class CategoryInput {
  @Field()
  id!: string;

  @Field()
  name!: string;
  
  @Field()
  createdAt!: string;

}

@Resolver(Category)
export class CategoryResolver {
  @Query(() => [Category])
  async getTags() {
    const categories = await Category.find();
    return categories
  }

  @Query(() => [Category])
  async getTagById(@Arg("id") id: string) {
    const category = await Category.findOneByOrFail({id})
    return category
  }

  @Mutation(() => Category)
  async addTag(@Arg("data") { name, createdAt }: CategoryInput) {
    const category = new Category()
    category.name=name
    category.createdAt=createdAt
    await category.save()
    return category;
  }
}