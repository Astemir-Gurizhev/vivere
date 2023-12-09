import React from "react";
import {Outlet} from "react-router-dom"
import "./Layout.css"

const Layout = () => {
    return (
        <div className="wrapper">
            <div className="content">
                
                <Outlet/>
            </div>
        </div>
    )
}

export default Layout