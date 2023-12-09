import React from "react";
import {Link} from "react-router-dom"
import "./Footer.css"
import Logo from "../../images/Header/1.png"
const Footer = () => {
    return (
        <div class="footer">
           <div class="container">
            <div class="footer-row">
                <div class="footer-left">
                   <Link to="/"> <img class="footer-left__img" src={Logo} alt=""/> </Link>
                    
                </div>
                <div class="footer-right">
                    <a href="" class="footer-right__licen">Лицензия</a>
                    <a href="" class="footer-right__private">Политика конфиденциальности</a>
                </div>
            </div>
           </div>
        </div>
    )
}

export default Footer