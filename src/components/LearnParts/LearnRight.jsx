import React from "react";
import LearnRightHeaderItem from "./LearnRightHeaderItem";

import Image2 from "../../images/Learn/Right/ant-design_twitter-outlined.png"
import Image3 from "../../images/Learn/Right/cib_facebook-f.png"
import Image4 from "../../images/Learn/Right/People 1.png"
import Image5 from "../../images/Learn/Right/right-head/Calendar.png"
import Image6 from "../../images/Learn/Right/right-head/Settings.png"
import Image7 from "../../images/Learn/Right/right-head/Notification.png"
import Image8 from "../../images/Learn/Right/right-head/Account.png"
const LearnRight = props => {
    return (
        <div class="right">
                
                <div class="right-header">
                    <LearnRightHeaderItem src={Image5}/>
                    <LearnRightHeaderItem src={Image6}/>
                    <LearnRightHeaderItem src={Image7}/>
                    <LearnRightHeaderItem src={Image8}/>
                </div>
                <div class="right-profile">
                <img class="right-profile__bigImg" src={Image4} alt=""/>
                    <div class="right-profile__head">
                        <div class="right-profile__head__name">Алина Романова</div>
                        <div class="right-profile__head__age">18 лет</div>
                    </div>
                    <div class="right-profile__bio">
                        <div class="right-profile__bio__text">Биография</div>
                        
                        <ul class="right-profile__bio__info">
                            <li class="right-profile__bio__info__item">Уровень: 1</li>
                            <li class="right-profile__bio__info__item">Дата рождения: 23.09.2003</li>
                            <li class="right-profile__bio__info__item">Пол: Женский</li>
                        </ul>
                        <div class="right-profile__bio__contact">Контакты</div>
                        <a href=""><img class="right-profile__bio__icon" src={Image2} alt=""/></a>
                    <a href=""><img class="right-profile__bio__icon" src={Image3} alt=""/></a>
                    </div>
                </div>
            
                
            </div>
    )
}
export default LearnRight