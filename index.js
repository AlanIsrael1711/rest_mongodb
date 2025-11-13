import express from "express"
import router from "./routes/rutas.js"
import mongoose from "mongoose"
import cors from "cors"

mongoose.Promise=global.Promise
mongoose.connect('mongodb+srv://ai828510_db_user:CIoaZd0BSLk5OsfB@cluster1.kqndh0v.mongodb.net/restapi?appName=Cluster1')

const app=express()

//accesos json
app.use(express.json())

//accesos a los datos del formulario
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.use("/api",router)

app.listen(3001)