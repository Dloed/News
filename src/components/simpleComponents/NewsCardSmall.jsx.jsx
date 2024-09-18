
import "./NewsCard.css";
import { React } from "react";

import "./Button.css";

const NewsCardSmall = ({ className, title, source, sourceText,  }) => {
  return (
    <div className={className}>
      <div className="titleSnd">{title}</div>
      <a className={"sourceSnd"} href={source}>
        {sourceText}
      </a>
    </div>
  );
};

export default NewsCardSmall;
