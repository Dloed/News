
import "./NewsCard.css";
import { React } from "react";

const NewsCard = ({ className, title, imgUrl, text, source, sourceText }) => {
  return (
    <div className={className}>
      <div className="title">{title}</div>
      <img className="img" src={imgUrl} alt={title}></img>
      <div className="text">
        <span className="text">{text}</span>
      </div>
      <a className="source" href={source}>
        {sourceText}
      </a>
    </div>
  );
};

export default NewsCard;
