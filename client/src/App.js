import React, {useEffect, useState} from 'react';
import './App.css';
import MainPage from '../src/page/MainPage'
import useRequest from '../src/postgresql/useRequest'
import axios from "axios";

function App() {
    const [MusicList, SetMusicList] = React.useState({});

    useEffect(() => {
        const getData = async () => {
            const response = await axios.get('/piano/music/list/', {});
            SetMusicList(response);
        }

        getData()

    }, []);

    useRequest({type: 'nodata', data : MusicList},)

    return (
        <MainPage
            data={MusicList}/>
    );
}


export default App;
