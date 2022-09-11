import { config } from 'dotenv';
config();
import { MongoClient } from 'mongodb'
export class Database{
    database_name="node-mongodb-weather-api";
    collections=["weathers"];
    constructor(CONNECTION_STR=process.env.MONGO_CONNECTION){
        this.CONNECTION_STR=CONNECTION_STR;
        this.client=MongoClient(CONNECTION_STR);
    }
}