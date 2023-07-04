import { DataSource } from "typeorm"

const myDataSource = new DataSource(
    {
        "type": "postgres",
        "host": "localhost",
        "port": 5435,
        "username": "admin",
        "password": "admin",
        "database": "db_postgres_evento",
    }
);
myDataSource.initialize().then(
    () => { console.log("Data Source has been initialized!") }).catch(
        (err) => { console.log("Error: " + err) });
