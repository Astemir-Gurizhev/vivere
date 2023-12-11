import React from "react";
import './Install.css'
const InstallLeftBtn = props => {
    return (
        <a href="" className="install-left__btn">
            <img src={props.src} alt="" className="install-left-btn__img" />
            <div className="install-left-btn__text">{props.text}</div>
        </a>
    )
}

export default InstallLeftBtn