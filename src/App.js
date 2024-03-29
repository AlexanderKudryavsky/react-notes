import React from 'react';
import './App.scss';
import IndexPage from "./components/IndexPage/IndexPage";
import {Route} from "react-router-dom";
import NewPage from "./components/NewPage/NewPage";
import EditPage from "./components/EditPage/EditPage";
import Navbar from "./components/Navbar/Navbar";

const App = (props) => {
    return(
        <div className={'app'}>
            <Navbar/>
            <div>
                <Route exact path='/' component={(props) =>
                    <IndexPage {...props}/>}
                />
                <Route exact path='/add' component={(props) =>
                    <NewPage {...props}/>}
                />
                <Route exact path='/edit/:id' component={(props) =>
                    <EditPage {...props}/>}
                />
            </div>


        </div>
    )
};

export default App