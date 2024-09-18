
import { useNavigate } from "react-router-dom";
import React from "react";
import Button from "./Button";
import "./Footer.css";
import Routing from "../../routes/routes";

function Footer() {
  const navigate = useNavigate();

  const navTo = (route) => {
    navigate(route);
  };

  return (
    <div className="footer">
      <Button
        className="Back"
        text={"Главная Страница"}
        onClick={() => navTo(Routing[0].path)}
      />
      <div className="footer-content">
        <h2>Контакты для связи:</h2>
        <div className="footer-contact">
          <h4>Email: borovads25@gmail.com</h4>
          <h4>Email: borovads25a@yandex.ru</h4>
        </div>
        <div className="footer-description">
          <h5>Учебный проект</h5>
        </div>
      </div>
    </div>
  );
}

export default Footer;
