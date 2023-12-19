import React from "react";
import LearnLeftMenuItem from "./LearnLeftMenuItem";
import Image1 from "../../images/Learn/Left/Live Score.png"
import Image2 from "../../images/Learn/Left/Scores.png"
import Image3 from "../../images/Learn/Left/Star.png"
import Image4 from "../../images/Learn/Left/All Games.png"
import Image5 from "../../images/Learn/Left/Account.png"
import Image6 from "../../images/Learn/Left/Categories.png"
import Image7 from "../../images/Learn/Left/Feature.png"
import {Link} from "react-router-dom"
const LearnLeft = () => {
    return (
        <div class="left">
            <div class="left-menu">

                <LearnLeftMenuItem src={Image1} name='Главная' link={'/'}/>
                <LearnLeftMenuItem src={Image2} name='Рейтинги' link={'/'}/>
                <LearnLeftMenuItem src={Image3} name='Сообщество' link={'/'}/>
                <LearnLeftMenuItem src={Image4} name='Магазин' link={'/'}/>
                <LearnLeftMenuItem src={Image5} name='Профиль' link={'/'}/>
                <LearnLeftMenuItem src={Image6} name='Ещё' link={'/'}/>

            </div>
            {/* <Link to={'/'} class="left-pro">
                <img class="left-pro__img" src={Image7} alt=""/>
                <div class="left-pro__title">Upgrade to <span class="left-pro__title__bold">PRO</span> for more features.</div>
                <div class="left-pro__btn">Upgrade</div>
            </Link> */}
        </div>
    )
}

export default LearnLeft