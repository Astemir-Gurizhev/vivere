import React from "react";
import {Link} from "react-router-dom"
import Image1 from "../../images/Learn/Center/Arrow Left.png"
import Image2 from "../../images/Learn/Center/book.png"
import Image3 from "../../images/Learn/Center/Star 3.png"
import Image4 from "../../images/Learn/Center/Star 4.png"

const LearnCenter  = props => {
    return (
        <div class="center">
                <div class="center-header">
                <Link to={'/'}><img class="center-header__arrow" src={Image1} alt=""/></Link>
                    <div class="center-header__title">Обучение</div>
                </div>
                <div class="center-block">
                    <div class="center-block__left">
                    <div class="center-block__title">Раздел 1</div>
                    <div class="center-block__text">Узнайте основные фразы, выучите первые слова</div>
                    </div>
                    <a href="" class="center-block__right">
                        <img src={Image2} alt=""/>
                        <div class="center-block__right__title" >Справочник</div>
                    </a>
                </div>
                
            </div>
    )
}

export default LearnCenter