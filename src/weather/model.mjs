import { CreateDatabase } from '../config/mongo.mjs'
export function CreateWeatherModel(icon,desc,humidity,sensation,temp,tempMax,tempMin,lat,long){
    return {
        icon,
        desc,
        humidity,
        sensation,
        temp,
        tempMax,
        tempMin,
        lat,
        long
    }
}
export function SaveWeatherModel(WeatherModel){
    const db=CreateDatabase()
    return db.collection('weathers').insertOne(WeatherModel)
}




