import { Query, Resolver } from "type-graphql";
import { Roles } from "../entities/Roles";


@Resolver(Roles)
export class RolesResolver {
  @Query(() => [Roles])
  async getRoles() {
    const roles = await Roles.find();
    return roles
  }
}