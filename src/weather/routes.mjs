import  { Router } from  "express";
let RouterWeather=Router()
RouterWeather.get('/',(req,res)=>{
    return res.status(200).json({
        msg:"testando"
    })
});
export default RouterWeather


