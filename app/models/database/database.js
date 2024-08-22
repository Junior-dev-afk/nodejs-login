import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';
import { fileURLToPath } from 'url';

class Database {

    constructor () {
        this.__filename = fileURLToPath(import.meta.url);
        this.__dirname = path.dirname(this.__filename);

        this.initDatebase()
    }


    async getDatabaseConnection() {
        return open({
          filename: path.join(this.__dirname, './datas/users.db'),
          driver: sqlite3.Database
        });
    }


    async initDatebase() {
        const db = await this.getDatabaseConnection();
        
        await db.exec(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user TEXT NOT NULL,
            senha TEXT NOT NULL
        )
        `);
    
        console.log('Banco de dados e tabela criados com sucesso!');
        await db.close();
    }

    async addAccount (user, senha) {

        const db = await this.getDatabaseConnection();
        
        await db.run(`
        INSERT INTO users (user, senha) VALUES (?, ?)
        `, [user, senha]);
    
        await db.close();

    }

}

const database = new Database()

export default database
