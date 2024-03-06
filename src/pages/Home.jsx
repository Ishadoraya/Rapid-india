import React, { useContext } from "react";
import NewsList from "../components/NewsList";
import WeatherCard from "../components/WeatherCard";
// import Quote from "../components/Quote/QuoteContext";
import NewsContext from "../context/NewsContext";

const Home = () => {
  const { topic } = useContext(NewsContext);
  return (
    <div className="container p-5">
      {/* <Quote/> */}
      <h1 className="text-center display-4 my-3 text-light bg-gradient shadow-sm">
        Trending news about {topic}
      </h1>
      <div className="row">
        <WeatherCard />
        <NewsList />
      </div>
    </div>
  );
};

export default Home;
