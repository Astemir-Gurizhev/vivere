import React from "react";
import {Link} from "react-router-dom"
import "./Header.css"

const HeaderMenuItem = (props) => {
    return (
        <li className="header-menu__item">
            <Link to={props.link} className="header-menu__link">{props.name}</Link>
        </li>
    )
}

export default HeaderMenuItem 