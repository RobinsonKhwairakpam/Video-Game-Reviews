import cardModel from "../models/cardModel.js"
import mongoose from "mongoose"

export const getCards = async (req, res) => {
    try {
        const cards = await cardModel.find()
        res.status(200).json(cards)
    } catch (error) {
        res.status(404).json({ message : error.message })
    }
}

export const createCards = async (req, res) => {
    const card = req.body
    const newCard = new cardModel(card)
    try {
        await newCard.save()
        res.status(201).json(newCard)
    } catch (error) {
        res.status(409).json( {message : error.message} )
    }
}

export const deleteCard = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id ${id}`)

    await cardModel.findByIdAndRemove(id)
    res.json({ message : "Post deleted successfully" })
}

export const updateCard = async (req, res) => {
    const { id } = req.params
    const card = req.body

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id ${id}`)

    const updatedCard = await cardModel.findByIdAndUpdate(id, {...card, _id : id}, { new : true })
    res.json(updatedCard)
}