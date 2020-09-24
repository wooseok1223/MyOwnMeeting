import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from "@material-ui/core/Dialog";

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: "center"
    },
    circle: {
        display: 'inline-block',
        textAlign: "center"
    }
}));

export default function CircularIndeterminate(props) {
    const classes = useStyles();
    const handleClose = () => {
        props.callbackFunction(false)
    }
    console.log("진행되고있나?")
    return (
        <>
            <Dialog className={classes.root} onClose={handleClose} aria-labelledby="customized-dialog-title"
                    open={props.IsOpen}>
                <DialogTitle id="customized-dialog-title">
                    데이터를 불러오고 있습니다 잠시만 기다려주세요.
                </DialogTitle>
                <div align="center">
                    <CircularProgress className={classes.circle} color="secondary" size={100}/>
                </div>
            </Dialog>
        </>
    );
}