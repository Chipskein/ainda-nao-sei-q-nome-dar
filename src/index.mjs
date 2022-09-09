import express from 'express';
import weatherRoutes from './weather/routes.mjs';
const PORT=process.env.PORT || 8000;  
const app = express();
app.use("/weather",weatherRoutes)
app.use("*",(req,res)=>{res.redirect('/weather')})
app.listen(PORT,() => console.log(`Listing on PORT ${PORT}`))