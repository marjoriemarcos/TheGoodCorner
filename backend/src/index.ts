import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import express from "express";
import "reflect-metadata";
import { dataSource } from "./config/db";
import { buildSchema } from "type-graphql";
import { AdResolver } from "./resolvers/AdResolver";
import { TagResolver } from "./resolvers/TagResolver";
import { CategoryResolver } from "./resolvers/CategoryResolver";

const port = 4000;

await dataSource.initialize();

const schema = await buildSchema({
    resolvers: [AdResolver, TagResolver, CategoryResolver],
  });
  
  const server = new ApolloServer({ schema });
  
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  
  console.log(`🚀  Server ready at: ${url}`);



