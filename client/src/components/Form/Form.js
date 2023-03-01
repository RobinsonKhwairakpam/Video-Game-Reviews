import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Paper, Typography, Button, TextField } from '@material-ui/core'
import { Input } from '@mui/material'
import FileBase from "react-file-base64"
import { createCard, updateCard } from '../../actions/cards'
import useStyles from './styles'

function Form( {currentId, setCurrentId} ) {
  const classes = useStyles()
  const dispatch = useDispatch()

  //form data
  const [cardData, setCardData] = useState({
    title : "",
    review : "",
    stars : "",
    year : "",
    selectedFile : ""
  })  

  //edit
  const card = useSelector(state => currentId ? state.cards.find(item => item._id === currentId) : 0)    

  //card data currently being edited
  useEffect(() => {
    if(card) setCardData(card)
  }, [card])

  
  //handle submit
  const handleSubmit = (e) => {
      e.preventDefault()
      if(currentId){        
        dispatch(updateCard(currentId, cardData)) //edit
        clear()
      }
      else{      
        dispatch(createCard(cardData))   //create
        clear()
      }
      
  }

  //clear button
  const clear = () => {
    setCurrentId(0)    
    setCardData({
      title : "",
      review : "",
      stars : "",
      year : "",
      selectedFile : ""
    })    
  }

  return (
    <Paper className={classes.formContainer}>
      <form autoComplete='off' noValidate onSubmit={handleSubmit}>
          <Typography variant='h6'>{currentId ? `Edit ${cardData.title}` : "Add Video Game" }</Typography>
          <TextField className={classes.inputFields} name="title" variant='outlined' label="Title" fullWidth required
            value={cardData.title}
            onChange={(e) => setCardData({...cardData, title : e.target.value})}
           />
           <TextField className={classes.inputFields} name="year" variant='outlined' label="Year of Release" fullWidth type="number" required
            value={cardData.year}
            onChange={(e) => setCardData({...cardData, year : e.target.value})}
           />
           <TextField className={classes.inputFields} name="review" variant='outlined' label="Review" fullWidth required
            value={cardData.review}
            onChange={(e) => setCardData({...cardData, review : e.target.value})}
           />
           <TextField className={classes.inputFields} name="stars" variant='outlined' label="Rating" fullWidth type="number" required
            value={cardData.stars}
            onChange={(e) => setCardData({...cardData, stars : e.target.value})}
           />
           <div className={classes.fileButton}>
            <FileBase 
              type="file"
              multiple={false}
              onDone = {( {base64} ) => { setCardData({...cardData, selectedFile : base64})} } 
            />
           </div>
           <Button className={classes.buttons} variant='contained' color="primary" size="large" type='submit' fullWidth>Submit</Button>
           <Button variant='contained' color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  )
}

export default Form