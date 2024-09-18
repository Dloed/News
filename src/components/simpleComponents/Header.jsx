import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { Icon } from "./Icon";

import "./Header.css";
import Routing from "../../routes/routes";

function Header() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);


  const handleResize = () => {
    setIsMobile(window.innerWidth <= 1100);
  };

  useEffect(() => {

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navTo = (route) => {
    navigate(route);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  if (isMobile) {
    return (
      <div className="navBar">
        <Button
          className="logoBtn"
          text={"NEWS"}
          onClick={() => navTo(Routing[0].path)}
        />

        <Button
          className="menuToggleBtn"
          onClick={toggleMenu}
          text={"Меню"}
        ></Button>
        <div className={`mobileMenu ${menuOpen ? "open" : "closed"}`}>
          <Button
            className="navBtn"
            text={"Экономика"}
            onClick={() => navTo(Routing[1].path)}
          />
          <Button
            className="navBtn"
            text={"Спорт"}
            onClick={() => navTo(Routing[2].path)}
          />
          <Button
            className="navBtn"
            text={"Политика"}
            onClick={() => navTo(Routing[3].path)}
          />
          <Button
            className="navBtn"
            text={"Наука"}
            onClick={() => navTo(Routing[4].path)}
          />
          <Button
            className="navBtn"
            text={"Культура"}
            onClick={() => navTo(Routing[5].path)}
          />
          <Button
            className="navBtn"
            text={"Происшествия"}
            onClick={() => navTo(Routing[6].path)}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="navBar">
        
        <Button
          className="logoBtn"
          text={"NEWS"}
          onClick={() => navTo(Routing[0].path)}
        />
        <div className="desktopMenu">
          <Button
            className="navBtn"
            text={"Экономика"}
            onClick={() => navTo(Routing[1].path)}
          />
          <Button
            className="navBtn"
            text={"Спорт"}
            onClick={() => navTo(Routing[2].path)}
          />
          <Button
            className="navBtn"
            text={"Политика"}
            onClick={() => navTo(Routing[3].path)}
          />
          <Button
            className="navBtn"
            text={"Наука"}
            onClick={() => navTo(Routing[4].path)}
          />
          <Button
            className="navBtn"
            text={"Культура"}
            onClick={() => navTo(Routing[5].path)}
          />
          <Button
            className="navBtn"
            text={"Происшествия"}
            onClick={() => navTo(Routing[6].path)}
          />
        </div>
      </div>
    );
  }
}

export default Header;
