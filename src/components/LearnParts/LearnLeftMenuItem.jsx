import React from "react";
import "./Learn.css"
import {Link} from 'react-router-dom'
const LearnLeftMenuItem = props => {
    return (
        <div class="left-menu__item"><img class="left-menu__img" src={props.src} alt=""/><Link class="left-menu__link" to={props.link}>{props.name}</Link></div>
    )
}
export default LearnLeftMenuItem