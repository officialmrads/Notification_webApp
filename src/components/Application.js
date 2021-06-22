import React from 'react'
import './App.css';
import Sidebar from './Sidebar';
import Feed from './Feed' ; 
import Widgets from './Widgets' ;
import './Application.css';

function Application() {
    return (
    <div className="application">
        <div className="leftbar">

        <Sidebar />    

        </div>

        {/*SideBar*/}

        <div className="middlebar">
        <Feed />
        </div>

        {/*Feed*/}

        <div className="rightbar">
        <Widgets />
        </div>
        {/*Widges*/}

    </div>
    )
}

export default Application
