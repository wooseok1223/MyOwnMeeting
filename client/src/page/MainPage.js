import React, {useEffect} from 'react';
import Header from '../contents/Header'
import MainContainer from '../contents/MainContents'
import axios from "axios";
import ShowLoading from "../components/ShowLoading";
import Footer from "../contents/Footer"

const api = (type, params) => {
    let data = {}
    switch (type) {
        case 'insertData':
            data = axios.post('/piano/music/list/', {});
            break
        case 'insertGraph':
            data = axios.post('/piano/music/graph/', {});
            break
        default:
            break
    }
    return data
}

function MainPage(props) {
    const [MusicList, SetMusicList] = React.useState({});
    const [LoadFlag, SetLoadFlag] = React.useState(true);

    let InsertFlag = null
    let InsertGraphFlag = null

    const callbackFunction = (IsOpen) => {
        SetLoadFlag(IsOpen);
    }

    useEffect(() => {

        const getData = async () => {
            const response = await axios.get('/piano/music/list/', {});
            SetMusicList(response);
        }

        Promise.all([api('insertData'), api('insertGraph')]).then(function (values) {
            if (values[0].status == '200') {
                InsertFlag = true
            }
            if (values[1].status == '200') {
                InsertGraphFlag = true
            }

            if (InsertFlag && InsertGraphFlag) {
                SetLoadFlag(false)
            }
        });
        getData()
    }, []);

    return (
        <>
            <div>
                <Header movePage={props.movePage}/>
                <MainContainer
                    data={MusicList}/>
                {/*<Footer></Footer>*/}
            </div>

            {LoadFlag ? <ShowLoading IsOpen={LoadFlag} callbackFunction={callbackFunction}/> : null}

        </>
    );
}


export default MainPage;
