import { makeStyles } from "@material-ui/core";

export default makeStyles(() => {
    return {
        barContainer : {
            color:'white',
            padding:'20px 0',
            borderRadius:'15px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
        },
        gameIcon : {
            scale: '1.3',
            marginRight: '0.9rem',
        },
    }
})