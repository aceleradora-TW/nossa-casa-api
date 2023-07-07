import "reflect-metadata"
import { DataSource } from "typeorm"
require('dotenv').config();

export const connect = () => {

  const AppDataSource = new DataSource({
    type: "postgres",
    host:  process.env.HOST || "localhost",
    port: 5432,
    username: process.env.USERNAME || "postgres" ,
    password: process.env.PASSWORD || "1234",
    database: process.env.DATABASE || "nossa_casa",
    synchronize: true,
    logging: true,
    entities: ["**/models/**/*{.ts,.js}"],
    subscribers: ["src/models/subscriber/**/*.ts"],
    migrations: ["src/models/migration/**/*.ts"],
  })

  AppDataSource.initialize()
    .then(() => {
      // here you can start to work with your database
    })
    .catch((error) => console.log(error))
}
