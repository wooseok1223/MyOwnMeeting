import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import DataGrid from "../components/DataGrid"
import CategoriDialog from "../components/CategoriDialog";

const useStyles = makeStyles((theme) => ({
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
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
            {open ? <CategoriDialog IsOpen={open} callbackFunction={callbackFunction}/> : ""}
        </div>
    );
}