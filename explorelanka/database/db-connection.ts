import { Sequelize } from 'sequelize';
import 'dotenv/config'


let sequelizeConfig: Sequelize | undefined= undefined;


try {
    sequelizeConfig = new Sequelize(
        process.env.DB_NAME as string, 
        process.env.DB_USERNAME as string, 
        process.env.DB_PASSWORD as string, 
        {
            host: process.env.DB_HOST,
            dialect: 'postgres',
            dialectOptions: {
                ssl: {
                    require: true,
                    rejectUnauthorized: false,
                }
            },
            port: 5432,
            logging: false // Disable logging
        }
    );
} catch (error) {
    console.error('Unable to connect to the database:', error);
    process.exit(1); // Exit the process with an error code if the connection fails
}


export default sequelizeConfig;
