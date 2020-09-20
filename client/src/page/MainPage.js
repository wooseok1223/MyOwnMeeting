import React, {useState, useEffect} from 'react'
import Header from '../contents/Header'
import axios from 'axios';
import MainContainer from '../contents/MainContents'

async function LoadData() {
    const response = await axios.post('/piano/music/list/', {});

    console.log(response)
    return response.data;
}


function MainPage() {

    return (
        <div>
            <button onClick={() => {
                LoadData()
            }}>post
            </button>
            <Header/>
            <MainContainer/>
        </div>
    );
}


export default MainPage;
