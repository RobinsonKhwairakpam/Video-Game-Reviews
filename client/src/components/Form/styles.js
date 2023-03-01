import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => {
    return {
        formContainer : {
            padding : "50px",
            boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 420,
        },
        inputFields : {
            margin : "5px 0"
        },
        buttons : {
            margin : "5px 0"
        },
        fileButton : {
            margin : "5px 0"
        }
    }
})