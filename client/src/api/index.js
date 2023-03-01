import axios from "axios" 
// require('dotenv').config()
const url = process.env.REACT_APP_BASE_URL
console.log(url)

// const url = "http://localhost:5000/cards"

export const fetchCards = () => axios.get(url)
export const createCards = (newCard) => axios.post(url, newCard)
export const deleteCard = (id) => axios.delete(`${url}/${id}`)
export const updateCard = (id, data) => axios.patch(`${url}/${id}`, data)