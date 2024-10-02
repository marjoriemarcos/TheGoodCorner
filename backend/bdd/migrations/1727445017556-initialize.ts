import { MigrationInterface, QueryRunner } from "typeorm";

export class Initialize1727445017556 implements MigrationInterface {
    name = 'Initialize1727445017556'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "ad" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "title" varchar(100) NOT NULL, "description" varchar NOT NULL, "owner" varchar NOT NULL, "price" integer NOT NULL, "picture" varchar NOT NULL, "location" varchar NOT NULL, "createdAt" varchar NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "ad"`);
    }

}
