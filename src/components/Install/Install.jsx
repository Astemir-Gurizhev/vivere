import React from "react";
import InstallLeftBtn from "./InstallLeftBtn";
import Image1 from "../../images/Install/1.png"
import Image2 from "../../images/Install/2.png"
import Image3 from "../../images/Install/3.png"
import "./Install.css"
const Install = () => {
    return (
        <div className="install">
            <div className="container">
                <div className="install-row">
                    <div className="install-left">
                        <div className="install-left__title">Учитесь в любое время, где бы вы ни были</div>
                        <div className="install-left__text">
                        Сделайте свои перерывы и поездки на работу более продуктивными с помощью наших приложений для Iphone и Android. 
                        </div>
                        <div className="install-left__btns">
                            <InstallLeftBtn src={Image1}  text='iOS' />
                            <InstallLeftBtn src={Image2}  text='Android' />
                        </div>
                    </div>
                    <img src={Image3} alt="" className="install-right" />
                </div>
            </div>
        </div>
    )
}
export default Install