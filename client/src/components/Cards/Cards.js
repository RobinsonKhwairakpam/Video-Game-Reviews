import React from 'react'
import Card from './Card/Card'
import { useSelector } from 'react-redux'
import { Grid, CircularProgress } from "@material-ui/core"
import useStyles from './styles'

function Cards( {setCurrentId, openMain, setOpenMain} ) {
    const cards = useSelector((state) => state.cards)
    const classes = useStyles()  

  return (
    !cards.length ? <CircularProgress /> : (

      <Grid className={classes.cardContainer} container alignItems='stretch' spacing={4}>
          {
            cards.map(card => (
              <Grid key={card._id} item xs={12} sm={6} md={4} >
                  <Card card={card} setCurrentId={setCurrentId} openMain={openMain} setOpenMain={setOpenMain} />
              </Grid>
            )
            )
          }
      </Grid>
    )
  )
}

export default Cards