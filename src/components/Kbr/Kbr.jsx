import React from "react"
import "./Kbr.css"
import Image1 from "../../images/Kbr/1.jpg"
import Image2 from "../../images/Kbr/2.jpg"
import Image3 from "../../images/Kbr/11.png"
const Kbr = () => {
    return (
        <div className="kbr">
                <div className="container">
                    <div className="kbr-title">Лучший новый способ выучить язык</div>
                    <div className="kbr-text">
                    <span>Учиться с Vivere </span> весело и увлекательно. Зарабатывайте очки за правильные ответы наперегонки со временем и повышайте свой уровень. 
                        Наши небольшие занятия эффективны, и у нас есть доказательства того, что это работает
                    </div>
                    <div className="kbr-row">
                        <div className="kbr-left">
                            <img src={Image1} alt="" className="kbr-left__img"/>
                            <img src={Image2} alt="" className="kbr-left__img"/>
                        </div>
                        
                        <img src={Image3} alt="" className="kbr-right__img"/>
                        
                    </div>
                </div>
        </div>

    )
}
export default Kbr