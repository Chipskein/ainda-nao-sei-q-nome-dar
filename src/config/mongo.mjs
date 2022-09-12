import { config } from 'dotenv';
config();

import {  MongoClient } from 'mongodb';
const MONGO_DATABASE='node-mongodb-weather-api';

export function CreateDatabase(url=process.env.MONGO_CONNECTION){
    const client=new MongoClient(url)
    const db=client.db(MONGO_DATABASE)
    return db
}