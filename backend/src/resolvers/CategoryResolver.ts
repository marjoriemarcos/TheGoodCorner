import { Arg, Field, ID, InputType, Mutation, Query, Resolver } from "type-graphql";
import { Category } from "../entities/Category";
import { Ad } from "../entities/Ad";

@InputType()
export class CategoryInput {

  @Field()
  name!: string;

  @Field(() => ID)
  ads!: Ad;

}

@Resolver(Category)
export class CategoryResolver {
  @Query(() => [Category])
  async getCategories() {
    const categories = await Category.find({ relations: ["ads"] });
    return categories
  }

  @Query(() => [Category])
  async getCategoryById(@Arg("id") id: string) {
    const category = await Category.findOneByOrFail({id})
    return category
  }

  @Mutation(() => Category)
  async createdCategory(@Arg("data") { name }: CategoryInput) {
    const category = new Category()
    category.name=name
    await category.save()
    return category;
  }

  @Mutation(() => Boolean)
  async deleteCategoryById(@Arg("id") id: string) {
    return (await Category.delete({id})).affected
  }

  @Mutation(() => Category)
  async replaceById(@Arg("adId") id: string, @Arg("data") data: CategoryInput ) {
    let category = await Category.findOneByOrFail({id})
    category = Object.assign(category, data)

    await category.save()
    return category;
  }
}