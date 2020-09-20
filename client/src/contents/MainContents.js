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
import Image1 from '../img/sampleData.jpeg'
import Image2 from '../img/sampleData2.jpeg'
import Image3 from '../img/sampleData3.jpeg'
import axios from "axios";

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
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));

export default function Album() {
    const classes = useStyles();
    const [MusicList, SetMusicList] = React.useState(0);

    useEffect(() => {
        const getData = async () => {
            const response = await axios.get('/piano/music/list/', {});
            SetMusicList(response);
        }

        getData()

    }, []);

    console.log(MusicList.data)

    const jsonSet = [{
        image: Image1,
        title: "역전 할머니 맥주",
        head: "역전 할머니 맥주",
        content: "건대에서 가장 인기 있는 술집 Best 1"
    },
        {
            image: Image2,
            title: "악바리",
            head: "악바리",
            content: "강남에서 가장 안주가 맛있는 집 (대표메뉴 : 석쇠불고기, 계란말이)"
        },
        {
            image: Image3,
            title: "코다차야",
            head: "코다차야",
            content: "강남에서 가장 안주가 맛있는 집 (대표메뉴 : 닭똥집)"
        }
    ]


    return (
        <React.Fragment>
            <CssBaseline/>
            <main>
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            테스트
                        </Typography>
                        <div className={classes.heroButtons}>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                    <Button variant="contained" color="primary">
                                        더 많은 정보 조회
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="primary">
                                        카테고리 재설정
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <div>
                    {MusicList ? MusicList.data.map((v) => (
                        <div>
                            {v.title} {v.artist} {v.like}
                        </div>
                    )) : ""}
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
        </React.Fragment>
    );
}