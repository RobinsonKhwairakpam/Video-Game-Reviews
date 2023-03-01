import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { deleteCard } from '../../../actions/cards';
import { Card as CardUI, CardMedia, Typography, CardActions, CardContent, Button, Dialog, DialogTitle, DialogContent, DialogActions } from "@material-ui/core"
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import moment from 'moment'
import useStyles from './styles'
import { DialogContentText, Rating } from '@mui/material';

function Card( {card, setCurrentId, setOpenMain} ) {
  const classes = useStyles()
  const dispatch = useDispatch()  

  //delete dialog box
  const [open, setOpen] = useState(false)   

  return (
    <CardUI className={classes.card}>
      <CardMedia className={classes.media} image={card.selectedFile} title={card.title}/>
      <div className={classes.overlay}>
        <Typography variant='h6'>{card.title}</Typography>
        <Typography className={classes.year} variant='body2'>{card.year}</Typography>
        <Typography variant='body3'>{moment(card.createdAt).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{color:"white"}} size='small' 
            onClick={() => { 
              setCurrentId(card._id) 
              setOpenMain(true)
        }}>
          <MoreHorizIcon fontSize="medium" />
        </Button>
      </div>
      <CardContent className={classes.details}>
        <Typography variant='body2' color='textSecondary'>{card.review}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>

        <Rating value={card.stars} 
                readOnly
                size="small"
                precision={0.5}
        />

        <Button size='small' color='primary' onClick={() => setOpen(true)} style={{color:'red'}}>
            <DeleteIcon fontSize='small' style={{marginRight:'3px'}}/>
            Remove
        </Button>
        <Dialog open={open} onClose={() => setOpen(false)} aria-labelledby='dialog-title' aria-describedby='dialog-details'> 
          <DialogTitle id='dialog-title'>Delete the review?</DialogTitle>
          <DialogContent>
            <DialogContentText id='dialog-details'>
            Are you sure you want to delete?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button autoFocus 
                    onClick={() => {
                      dispatch(deleteCard(card._id)) 
                      setOpen(false)
                    }}>
              Yes
            </Button>
            <Button onClick={() => setOpen(false)}>No</Button>
          </DialogActions>
        </Dialog>
      </CardActions>
    </CardUI>
  )
}

export default Card