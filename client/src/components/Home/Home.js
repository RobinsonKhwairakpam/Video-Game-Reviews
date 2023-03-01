import { Button, Container, Grid, Grow, Modal, styled } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import useStyles from './styles'

//React-Redux
import { useDispatch } from "react-redux";
import { getCards } from '../../actions/cards'
import Cards from '../Cards/Cards';
import Form from '../Form/Form'

//Styled components
const AddButton = styled(Button)({
  boxShadow: 'none',
  color: 'white',
  textTransform: 'none',
  textAlign: 'center',
  fontSize: 16,
  padding: '8px 16px',
  border: '1px solid',
  backgroundColor: 'green',
  borderColor: 'green',
  borderRadius: '10px',
  marginBottom: '10px',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    backgroundColor: 'darkgreen',
    borderColor: '#0062cc',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: 'darkgreen',
    borderColor: '#005cbf',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(130, 204, 130, 0.8)',
  }
})

function Home() {
    //editing current ID
    const [currentId, setCurrentId] = useState(0)
    const dispatch = useDispatch()
    const classes = useStyles()

    //modals
    const [openMain, setOpenMain] = useState(false)

    useEffect(() => {
        dispatch(getCards())
      }, [dispatch])      

  return ( 
        <div className={classes.homeContainer}>
        <Grow in>        
          <Container >          
            <AddButton variant='contained' color='success' 
                endIcon={<AddIcon />} 
                disableRipple
                onClick={() => {
                    setOpenMain(!openMain)
                    setCurrentId(0)     //cleaning out currentID being edited
                }}
                >
                ADD NEW REVIEW
                </AddButton>
                <Modal open={openMain} onClose={() => setOpenMain(false)}>
                <Form currentId={currentId} setCurrentId={setCurrentId} />
                </Modal>           

            <Grid container >
                <Cards setCurrentId={setCurrentId} setOpenMain={setOpenMain} openMain={openMain} />                
            </Grid>

          </Container>
        </Grow>
        </div>
)      
}

export default Home