import React from "react";
import NewsLetter from "../NewsLetter";
import Events from "../Events";
import Article from "./Article";

const MainNews = () => {
  return (
    <div id="news">
      <Article />
      <Events />
      <NewsLetter />
    </div>
  );
};

export default MainNews;
