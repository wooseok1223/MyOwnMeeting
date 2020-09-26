import React from 'react';
import MainPage from '../src/page/MainPage'
import ShowLoading from "./components/ShowLoading";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import SignUp from "./contents/SignUp"
import SignIn from "./contents/SignIn"


function App() {
    return (
        <Router>
            <switch>
                <Route exact path={"/"} component={MainPage}/>
                <Route path={"/signin"} component={SignIn}/>
                <Route path={"/signup"} component={SignUp}/>
            </switch>
        </Router>
    );
}


export default App;
