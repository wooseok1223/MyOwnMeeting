import React, {useEffect, useState} from 'react';
import MainPage from '../src/page/MainPage'
// import useRequest from '../src/postgresql/useRequest'
import axios from "axios";

const saveGraph = async () => {
    await axios.post('/piano/music/graph/', {});
}

function App() {
    const [MusicList, SetMusicList] = React.useState({});
    const [ImgFlag, SetImgFlag] = React.useState(false);

    useEffect(() => {

        const insertData = async () => {
            await axios.post('/piano/music/list/', {});
        }

        const getData = async () => {
            const response = await axios.get('/piano/music/list/', {});
            SetMusicList(response);
        }

        insertData()
        getData()

    }, []);

    if (MusicList) {
        if (MusicList.status == "200") {
            saveGraph()
        }
    }


    return (
        <MainPage
            data={MusicList}/>
    );
}


export default App;
