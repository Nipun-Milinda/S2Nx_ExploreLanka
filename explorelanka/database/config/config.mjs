const options = {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'postgres',
    port: 5432,
    migrationStorageTableName: "migrations",
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        }
    },
    port: 5432,
    logging: false // Disable logging
};

export default options;