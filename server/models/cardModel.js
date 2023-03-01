import mongoose from "mongoose";

const cardSchema = mongoose.Schema({
    title : String,
    review : String,
    stars : Number,
    year : Number,
    selectedFile : String,
    createdAt : {
        type : Date,
        default : new Date()
    }
})

const cardModel = mongoose.model("cardModel", cardSchema)

export default cardModel