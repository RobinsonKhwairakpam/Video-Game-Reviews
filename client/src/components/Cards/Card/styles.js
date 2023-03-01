import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: "180px",
    // paddingTop: '56.25%',
    component: 'img',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken'    
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
    paddingBottom: '8px',
    boxShadow: '0px 3px 8px rgba(0, 0, 0, 0.24)',
    transition: '0.6s',
    "&:hover": { 
        transform: 'scale(1.1)',
        zIndex: '2'
     }
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  year: {
    
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
});