import React, {useState} from 'react'
import Header from '../contents/Header'
import axios from 'axios';
import MainContainer from '../contents/MainContents'

async function LoadData() {
    debugger
    const response = await axios.post('http://127.0.0.1:8080/piano/music/list/', {});

    console.log(response)
    return response.data;
}

async function getData() {
    debugger
    const response = await axios.get('http://127.0.0.1:8080/piano/music/list/', {});
    return response.data;
}


function MainPage() {


    return (
        <div>
            <button onClick={() => {
                getData()
            }}>get
            </button>
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
