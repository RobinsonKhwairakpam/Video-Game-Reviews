import { AppBar, Typography } from '@material-ui/core'
import React from 'react'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import useStyles from './styles'

export default function Navbar() {
    const classes = useStyles()
  return (
    <>
        <AppBar position="static" className={classes.barContainer}>
          <div>
            <SportsEsportsIcon fontSize='large' className={classes.gameIcon} />
          </div>
          <Typography variant="h4">Video Games</Typography>
          {/* <img alt="video game" height="60" /> */}
        </AppBar>
    </>
  )
}
