import "./NewsCard.css";

const truncateText = (text, maxLength) => {
  
  if (!text) {
    return '';  
  }

  
  if (text.length <= maxLength) {
    return text;
  }


  const truncated = text.split(" ").reduce((acc, word) => {
    if (acc.length + word.length + 1 <= maxLength) {
      return acc + (acc ? " " : "") + word;
    }
    return acc;
  }, "");

  return truncated + "...";
};

const NewsCard = ({ className, title, imgUrl, text, source, sourceText }) => {
  return (
    <div className={className}>
      <div className="title">{title}</div>
      <img
        className="img"
        src={imgUrl}
        
      ></img>

      <div className="text">{truncateText(text, 160)}</div>
      <a className="source" href={source}>
        {sourceText}
      </a>
    </div>
  );
};

export default NewsCard;
