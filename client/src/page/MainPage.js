import React from 'react'
import Header from '../contents/Header'
import MainContainer from '../contents/MainContents'


function MainPage(props) {

    return (
        <div>
            <Header/>
            <MainContainer
            data={props.data}/>
        </div>
    );
}


export default MainPage;
