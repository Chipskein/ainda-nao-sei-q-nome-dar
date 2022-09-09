import { config } from 'dotenv';
config();
export class Database{
    constructor(CONNECTION_STR=process.env.MONGO_CONNECTION){
        this.CONNECTION_STR=CONNECTION_STR;
    }
}