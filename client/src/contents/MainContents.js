import React, {useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import DataGrid from "../components/DataGrid"
import IconButton from "@material-ui/core/IconButton";
import CategoriDialog from "../components/CategoriDialog";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
    tableStyle: {
        textAlign: "center"
    }
}));

export default function Album(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const titleName = () => {
        let name = ''
        if (props.data.data) {
            name = props.data.data[0].title
        }
        console.log(name)
        return name
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const callbackFunction = (IsOpen) => {
        setOpen(IsOpen);
    }


    return (
        <div>
            <CssBaseline/>
            <main>
                <div className={classes.heroContent}>
                    <Container maxWidth="600px">
                        <Typography variant="h5" align="center" color="textSecondary">
                            현재 가장 인기 있는 피아노곡은 <div
                            style={{color: 'red', display: "inline-block"}}>'{titleName()}'</div> 입니다.
                        </Typography>
                        <div className={classes.heroButtons}>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                    <Button variant="contained" color="primary" onClick={handleClickOpen}>
                                        그래프 보기
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="primary">
                                        고민중
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <div className={classes.tableStyle}>
                    <DataGrid
                        data={props.data}/>
                </div>
            </main>
            {/* Footer */}
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    Something here to give the footer a purpose!
                </Typography>
                <Copyright/>
            </footer>
            {/* End footer */}
            <CategoriDialog IsOpen={open} callbackFunction={callbackFunction}/>
        </div>
    );
}