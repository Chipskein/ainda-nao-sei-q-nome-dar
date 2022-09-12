import { HTTP_STATUS } from '../config/status.mjs'
export async function CreateWeather(req,res){
    return res.status(HTTP_STATUS.SUCCESS).json({
        msg:"testando"
    })
}