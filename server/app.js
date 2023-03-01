import express from "express"
import mongoose from "mongoose"
import bodyParser  from "body-parser"
import cors from "cors"
import dotenv from "dotenv"
import cardRouter from "./routes/cards.js"

const app = express()
dotenv.config()

//Middlewares
app.use(cors())   
mongoose.set('strictQuery', true)
app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))

//Routes
app.use("/cards", cardRouter)

//Server configs
const PORT = process.env.PORT || 5000

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser : true, useUnifiedTopology : true })
        .then(() => app.listen(PORT, () => {
            console.log("Server running on port " + PORT)
        }))
        .catch(err => console.log(err.message))
