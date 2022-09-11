import { config } from 'dotenv';
config();
import { MongoClient } from 'mongodb'
export class Database{
    constructor(CONNECTION_STR=process.env.MONGO_CONNECTION){
        this.CONNECTION_STR=CONNECTION_STR;
        this.client=MongoClient(CONNECTION_STR);
    }
}