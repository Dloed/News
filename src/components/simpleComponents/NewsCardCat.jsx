
import React from "react";
import "./NewsCardCat.css";

import { useNavigate } from "react-router-dom";

const NewsCardCat = ({
  className,
  title,
  source,
  sourceText,
  index,
  category,
  img,
  text,
}) => {
  const navigate = useNavigate();

  const navTo = (route) => {
    navigate(route);
  };

  return (
    <div className={className}>
      <div className="titleCat">
        <div className="titleCardCat">{title}</div>
        <img className="imgCardCat" src={img} alt={title} />
      </div>
      <div className="TextCat">
        <div className="cardCatText">{text}</div>
        <a className="sourceCardCat" href={source}>
          {sourceText}
        </a>
      </div>
    </div>
  );
};

export default NewsCardCat;
