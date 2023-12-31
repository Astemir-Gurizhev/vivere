import React from "react";
import Logo from "../../images/Header/1.png"
import {Link} from "react-router-dom"
import HeaderMenuItem from "./HeaderMenuItem";
import "./Header.css"
const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="header-row">
                    <Link to={'/'}><img src={Logo} alt="" className="header-logo" /></Link>
                    <ul className="header-menu">
                        <HeaderMenuItem link="/" name="Главная"/>
                        <HeaderMenuItem link="/Learn" name="Обучение"/>
                        <HeaderMenuItem link="/" name="Сообщество"/>
                        <HeaderMenuItem link="/" name="Рейтинги"/>
                    </ul>
                    <div className="header-btns">
                        <Link to={'/'} className="header-btns__login">Войти</Link>
                        <Link to={'/'} className="header-btns__reg">Зарегистрироваться</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header