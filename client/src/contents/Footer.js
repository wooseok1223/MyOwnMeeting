import Typography from "@material-ui/core/Typography";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                깃허브 주소라도 올릴까..
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    }
}));

export default function MenuAppBar() {
    const classes = useStyles();
    return (
        <div>
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    아직 규정 못
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    만들어야하나 말아야하나
                </Typography>
                <Copyright/>
            </footer>
        </div>
    );
}