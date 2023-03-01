import React from 'react'
import { Container } from "@material-ui/core"
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';

import useStyles from './styles'

function App() { 
  const classes = useStyles()

  return (
    <div className="app">
      <Container maxWidth="lg">
        <Navbar />
        <Home />
      </Container>
    </div>
  );
}

export default App;
