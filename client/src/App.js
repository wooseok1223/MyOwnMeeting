import React, {useEffect, useState} from 'react';
import MainPage from '../src/page/MainPage'
// import useRequest from '../src/postgresql/useRequest'
import axios from "axios";
import ShowLoading from "./components/ShowLoading";

const insertData = async () => {
    let insertMusic = ''
    insertMusic = await axios.post('/piano/music/list/', {});
    return insertMusic
}

const saveGraph = async () => {
    let insertGraph = ''
    insertGraph = await axios.post('/piano/music/graph/', {});
    return insertGraph
}

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

function App() {
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

    console.log(LoadFlag)
    return (
        <>
            <MainPage
                data={MusicList}/>

            {LoadFlag ? <ShowLoading IsOpen={LoadFlag} callbackFunction={callbackFunction}/> : null}
        </>
    );
}


export default App;
