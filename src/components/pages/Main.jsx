import React, { useEffect } from "react";
import Header from "../simpleComponents/Header.jsx";
import Footer from "../simpleComponents/Footer.jsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../State/Slicers/SlicersNews.js";
import NewsCard from "../simpleComponents/NewsCard";
import NewsCardSmall from "../simpleComponents/NewsCardSmall.jsx";
import ApiData from "../State/Slicers/IfApiCrashed.js";

function Main() {
  const dispatch = useDispatch();

  const { smallArticles, mainArticles, status } = useSelector(
    (state) => state.news
  );

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
        <div className="snd-container">
          <NewsCardSmall className={"card-loading-snd"} />
          <NewsCardSmall className={"card-loading-snd"} />
          <NewsCardSmall className={"card-loading-snd"} />
          <NewsCardSmall className={"card-loading-snd"} />
          <NewsCardSmall className={"card-loading-snd"} />
          <NewsCardSmall className={"card-loading-snd"} />
          <NewsCardSmall className={"card-loading-snd"} />
          <NewsCardSmall className={"card-loading-snd"} />
          <NewsCardSmall className={"card-loading-snd"} />
        </div>
      </>
    );
  }

  if (status === "rejected") {
    const bigArticles = ApiData.articles
      .filter((item) => item.urlToImage)
      .slice(0, 10);
    console.log(bigArticles, "consoleChech1");
    const sndArticles = ApiData.articles.slice(40, 58);
    console.log(sndArticles, "consoleCheck");

    return (
      <>
        <Header />
        <div className="card-container">
          {bigArticles.map((art, index) => (
            <NewsCard
              key={index}
              sourceText={"Читать в источнике "}
              className={"card"}
              title={art.title}
              imgUrl={art.urlToImage}
              text={art.description}
              source={art.url}
              index={index}
            />
          ))}
        </div>
        <div className="snd-container">
          {sndArticles.map((art, index) => (
            <NewsCardSmall
              key={index}
              sourceText={"Читать в источнике"}
              className={"card-snd"}
              title={art.title}
              text={art.description}
              source={art.url}
              news={art}
              index={index}
            />
          ))}
        </div>
        <Footer />
      </>
    );
  }

  if (status === "succeeded" && smallArticles && mainArticles) {
    const bigArticles = mainArticles.articles
      .filter((item) => item.urlToImage)
      .slice(0, 10);
    const sndArticles = smallArticles.articles.slice(0, 18);

    return (
      <>
        <Header />
        <div className="card-container">
          {bigArticles.map((art, index) => (
            <NewsCard
              key={index}
              sourceText={"Читать в источнике "}
              className={"card"}
              title={art.title}
              imgUrl={art.urlToImage}
              text={art.description}
              source={art.url}
              index={index}
            />
          ))}
        </div>
        <div className="snd-container">
          {sndArticles.map((art, index) => (
            <NewsCardSmall
              key={index}
              sourceText={"Читать в источнике"}
              className={"card-snd"}
              title={art.title}
              text={art.description}
              source={art.url}
              news={art}
              index={index}
            />
          ))}
        </div>
        <Footer />
      </>
    );
  }
}

export default Main;
