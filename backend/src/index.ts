import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import express from "express";
import "reflect-metadata";
import * as jwt from "jsonwebtoken";
import { dataSource } from "./config/db";
import { buildSchema } from "type-graphql";
import { AdResolver } from "./resolvers/AdResolver";
import { TagResolver } from "./resolvers/TagResolver";
import { CategoryResolver } from "./resolvers/CategoryResolver";
import { UserResolver } from "./resolvers/UserResolver";
import { authChecker } from "./auth/authChecker";
import { RolesResolver } from "./resolvers/RolesResolver";

const port = 4000;

async function start() {
  await dataSource.initialize();
  
  const schema = await buildSchema({
      resolvers: [AdResolver, TagResolver, CategoryResolver, UserResolver, RolesResolver, authChecker],
      authChecker: authChecker
    });
    
    const server = new ApolloServer({ schema });
    
    const { url } = await startStandaloneServer(server, {
      listen: { port: port },
      context: async ({ req, res }) => {
        if (!process.env.JWT_SECRET) return { res }
        const token = req.headers.cookie?.split("token=")[1];

        if (!token) return { res }
        const tokenContent = jwt.verify(token, process.env.JWT_SECRET)
        return { 
          res,
          user: tokenContent
        };
      }
    });
    
    console.log(`🚀  Server ready at: ${url}`);
    }
    start()
