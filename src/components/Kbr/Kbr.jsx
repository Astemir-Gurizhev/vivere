import React from "react"
import "./Kbr.css"
import Image1 from "../../images/Kbr/1.jpg"
import Image2 from "../../images/Kbr/2.jpg"
import Image3 from "../../images/Kbr/11.png"
const Kbr = () => {
    return (
        <div className="kbr">
                <div className="container">
                    <div className="kbr-title">Знание языка изменит тебя навсегда!</div>
                    <div className="kbr-text">
                    <span>Кабарди́но-черке́сский или восто́чно-ады́гский язы́к (самоназвание — адыгэбзэ) </span> — 
                    язык кабардинцев и черкесов, один из государственных языков Кабардино-Балкарской и Карачаево-Черкесской республик.
                    Некоторые лингвисты склонны считать кабардино-черкесский и адыгейский языки диалектами общего адыгского языка.
                    Сами адыгейцы, кабардинцы и черкесы называют свой язык адыгэбзэ, что означает «адыгский язык».
                     Несмотря на существование общего названия, в русском языке бытуют также раздельные названия — адыгейский язык,
                      кабардинский язык и черкесский язык.
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