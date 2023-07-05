import { MigrationInterface, QueryRunner, Table } from "typeorm"

export default class PostRefactoring1688597537927 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "Id",
                        type:"uuid",
                        isPrimary: true,
                    },
                    {
                        name: "name",
                        type:"varchar",
                        
                    },
                    {
                        name: "password",
                        type:"varchar",
                    },
                    {
                        name: "created_At",
                        type:"timestamp",
                        
                    },
                    {
                        name: "updated_At",
                        type:"timestamp",
                        
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users")
    }

}

