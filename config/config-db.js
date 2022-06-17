import Sequelize from "sequelize/types";
import config from "./config";


const sequelize = new Sequelize(
    config.db_name,
    config.db_username,
    config.db_password,
    {
        dialect: "postgres",
    }
)


sequelize
    .authenticate()
    .then(() => console.log("Connection has been established successfully."))
    .catch((err) => console.error("Unable to connect to the database:", err))

export {sequelize}