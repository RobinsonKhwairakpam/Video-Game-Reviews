import * as api from '../api'

//Actions with thunk -> async(dispatch)

//get all
export const getCards = () => async(dispatch) => {
    try {
        const { data } = await api.fetchCards()
        const action = {
            type : "FETCH_ALL",
            payload : data       //instead of returning action
        }
        dispatch(action)

    } catch (error) {
        console.log(error.message)
    }   
}

//create
export const createCard = (card) => async(dispatch) => {
    try {
        const { data } = await api.createCards(card)
        const action = {
            type : "CREATE",
            payload : data       
        }
        dispatch(action)

    } catch (error) {
        console.log(error.message)
    }   
}

//delete
export const deleteCard = (id) => async(dispatch) => {
    try {
        await api.deleteCard(id)
        const action = {
            type : "DELETE",
            payload : id       
        }
        dispatch(action)

    } catch (error) {
        console.log(error.message)
    }   
}

//update
export const updateCard = (id, card) => async(dispatch) => {
    try {
        const { data } = await api.updateCard(id, card)
        const action = {
            type : "UPDATE",
            payload : data      
        }
        dispatch(action)

    } catch (error) {
        console.log(error.message)
    }   
}
