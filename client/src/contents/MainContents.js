import React from 'react';
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
                            지역카테고리에서 키워드로 검색된 결과 입니다. 더많은 정보를 알고 싶다면 하단의 버튼을 클릭해주세요.
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
                <Container className={classes.cardGrid} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {jsonSet.map((card, idx) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image= {card.image}
                                        title= {card.title}
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {card.head}
                                        </Typography>
                                        <Typography>
                                            {card.content}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            View
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
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