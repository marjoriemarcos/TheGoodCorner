import { DataSource } from "typeorm";
import { Ad } from "../entities/Ad";
import { Category } from "../entities/Category";
import { Tag } from "../entities/Tag";
import { config } from "dotenv";
import { User } from "../entities/User";
import { Roles } from "../entities/Roles";

config()
const { DB_HOST, DB_PASSWORD, DB_USER, DB_SCHEMA } = process.env;

export const dataSource = new DataSource({
  type: "postgres",
  host: DB_HOST,
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_SCHEMA,
  port: 5432,
  entities: [Ad, Category, Tag, User, Roles],
  synchronize: true,
  // migrations: ["./bdd/migrations/*.ts"],
  // migrationsTableName: "migrations",
});

