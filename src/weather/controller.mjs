import { HTTP_STATUS } from '../config/status.mjs'
import { VerifyIfObjHasKeys } from '../utils/object.mjs'
import { CreateWeatherModel, SaveWeatherModel } from './model.mjs'



export async function CreateWeather(req,res){
    try{
        const validCamps=["icon","desc","humidity","sensation","temp","tempMax","tempMin","lat","long"]
        if(!VerifyIfObjHasKeys(req.body,validCamps)){
            throw {status: HTTP_STATUS.BAD_REQUEST, message: 'Body Com Campos Inválidos'};
        }
        const { icon,desc,humidity,sensation,temp,tempMax,tempMin,lat,long } = req.body
        const model=CreateWeatherModel(icon,desc,humidity,sensation,temp,tempMax,tempMin,lat,long)
        await SaveWeatherModel(model)
        return res.status(HTTP_STATUS.SUCCESS).json(model)
    }
    catch(err){
        let statusCode=err.status || HTTP_STATUS.INTERNAL_ERROR
        return res.status(statusCode).json({ message: err.message})
    }
}