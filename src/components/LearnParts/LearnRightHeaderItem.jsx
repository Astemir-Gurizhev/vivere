import React from "react";
import {Link} from 'react-router-dom'
const LearnRightHeaderItem = props => {
    return (
        <Link class="right-header__item" href=""><img class="right-header__icon" src={props.src} alt=""/></Link>
    )
}

export default LearnRightHeaderItem