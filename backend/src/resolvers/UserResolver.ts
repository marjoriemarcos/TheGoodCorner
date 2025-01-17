import { Arg, Authorized, Ctx, ID, Field, InputType, Mutation, Query, Resolver } from "type-graphql";
import { User } from "../entities/User";
import * as argon from "argon2";
import * as jwt from "jsonwebtoken";
import { Response } from "express";
import { Roles } from "../entities/Roles";

@InputType()
export class UserInput {
  @Field()
  name!: string;

  @Field()
  email!: string;

  @Field()
  hashedPassword!: string;

  @Field(() => ID)
  roles!: Roles;
}

@InputType()
export class UserInputBis {
  @Field()
  email!: string;

  @Field()
  hashedPassword!: string;

}

const tokenVerif = (user: User, res: Response, jwtSecret: string) => {
  const tokenContent = {
    mail: user.email,
    name: user.name,
    roles: user.roles
  }

  // Authentification
  const token = jwt.sign(tokenContent, jwtSecret);
  res.cookie("token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
  });
  console.log("🚀 ~ tokenVerif ~ token:", token)
  
  const profile = {
    mail: user.email,
    name: user.name
  }

  return profile;
}

@Resolver(User)
export class UserResolver {
  @Authorized("ADMIN")
  @Query(() => [User])
  async getUsers() {
    const users = await User.find();
    return users
  }

  @Mutation(() => String)
  async singUp(
    @Arg("data") userData : UserInput,
    @Ctx() { res }: { res: Response }) 
    {
      if (!process.env.JWT_SECRET) throw new Error ('Missing env variable')

      const hashedPassword = await argon.hash(userData.hashedPassword)

      const user = await User.save({
        email: userData.email,
        hashedPassword:  hashedPassword,
        name: userData.name,
        roles: userData.roles
      });

      return JSON.stringify(tokenVerif(user, res, process.env.JWT_SECRET))
    }

  @Mutation(() => String)
  async logIn(
    @Arg("data") userData : UserInputBis,
    @Ctx() { res }: { res: Response }) 
    {
      if (!process.env.JWT_SECRET) throw new Error ('Missing env variable')
      // Identification
      const user = await User.findOneByOrFail({ email: userData.email})

      const isValid = await argon.verify(user.hashedPassword, userData.hashedPassword)
      if (!isValid) throw new Error ('Wrong password')
  
      return JSON.stringify(tokenVerif(user, res, process.env.JWT_SECRET))
    }

  @Authorized("USER")
  @Query(() => [User])
  async getUsersAsUser() {
    const users = await User.find({
      relations : [ "roles"]
    });
    return users
  }

  @Authorized("ADMIN")
  @Query(() => [User])
  async getUsersAsAdmin() {
    const users = await User.find({
      relations : [ "roles"]
    });
    return users
  }
}