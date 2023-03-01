const cardReducer = (cards = [], action) => {
    switch(action.type){
        case "UPDATE" :            
            const newCards = cards.map(card => card._id === action.payload._id ? action.payload : card)
            return newCards 
        case "FETCH_ALL" :
            return action.payload          
        case "CREATE" :
            return [...cards, action.payload]
        case "DELETE" :
            return cards.filter(card => card._id !== action.payload)        
        default :
            return cards
}}

export default cardReducer