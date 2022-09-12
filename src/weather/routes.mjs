import  { Router } from  "express";
import { CreateWeather } from "./controller.mjs";
let RouterWeather=Router()
RouterWeather.post('/',CreateWeather);
export default RouterWeather


