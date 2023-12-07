import React from "react";
import {Outlet} from "react-router-dom"
import Header from "./Header/Header"
import "./Layout.css"

const Layout = () => {
    return (
        <div className="wrapper">
            <div className="content">
                <Header/>
                <Outlet/>
            </div>
        </div>
    )
}

export default Layout