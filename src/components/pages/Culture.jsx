import React, { useEffect } from "react";
import Header from "../simpleComponents/Header.jsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../State/Slicers/SlicersNews.js";
import NewsCardCat from "../simpleComponents/NewsCardCat.jsx";
import NewsCard from "../simpleComponents/NewsCard.jsx";
import "../simpleComponents/NewsCardCat.css";
import Footer from "../simpleComponents/Footer.jsx";

function Cult() {
  const dispatch = useDispatch();
  const { culture, status, error } = useSelector((state) => state.news);

  useEffect(() => {
    const isInitialLoad = sessionStorage.getItem("isInitialLoad");

    if (!isInitialLoad || isInitialLoad === "false") {
      dispatch(fetchNews());
      sessionStorage.setItem("isInitialLoad", "true");
    }

    const handleBeforeUnload = () => {
      sessionStorage.setItem("isInitialLoad", "false");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [dispatch]);

  if (status === "pending") {
    return (
      <>
        <Header />
        <div className="card-container">
          <NewsCard className={"card-loading"} />
          <NewsCard className={"card-loading"} />
          <NewsCard className={"card-loading"} />
          <NewsCard className={"card-loading"} />
        </div>
      </>
    );
  }

  if (status === "rejected") {
    return (
      <>
        <Header />
        <div className="error">Ошибка Получения Данных с API  <br />
        😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱 </div>
      </>
    );
  }

  if (status === "succeeded" && culture) {
    const Articles = culture.articles
      .filter((item) => item.urlToImage)
      .slice(0, 10);

    return (
      <>
        <Header />
        <div className="containerEconomy">
          {Articles.map((art, index) => (
            <NewsCardCat
              key={index}
              sourceText={"Читать в источнике "}
              className={"cardCat"}
              title={art.title}
              img={art.urlToImage}
              text={art.description}
              source={art.url}
              index={index}
              category="economy"
            />
          ))}
        </div>
        <Footer/>
      </>
    );
  }

  return null;
}

export default Cult;
