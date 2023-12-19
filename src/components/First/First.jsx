import React from "react";
import {Link} from "react-router-dom"
import "./First.css";


const First = () => {
  return (
    <div className="first">
      <div className="container">
        <div className="first-row">
          <div className="first-title">Vivere</div>
          <div className="first-text">Образовательная платформа и маркетплейс онлайн-курсов</div>
          <Link to='/Learn' className="first-btn">Начать обучение</Link>
        </div>
      </div>
    </div>
  );
};

export default First