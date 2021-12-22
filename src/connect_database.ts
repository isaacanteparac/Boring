import { createPool, Pool } from "mysql2/promise";


export async function connect(): Promise<Pool> {
    const connection = createPool({
        host: 'localhost',
        user: 'thisisisaacac',
        password: '2002',
        database: 'duaui',
        connectionLimit: 10
    });
    return connection;
}