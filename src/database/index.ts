import { DataSource} from "typeorm"

     const dataSource = new DataSource({
        "type": "postgres",
        "host": "localhost",
        "port": 5435,
        "username": "admin",
        "password": "admin",
        "database": "db_postgres_evento",
        "entities": ["./src/entities/*.ts"],
        "migrations": ["./src/database/migrations/*.ts"],
    });
    dataSource.initialize().then(
        () => { console.log("Data Source has been initialized!") }).catch(
            (err) => { console.log("Error: " + err) });
    
    export { dataSource };




