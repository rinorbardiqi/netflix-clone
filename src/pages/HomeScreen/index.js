import React from "react";
import "./styles.css";
import Nav from "../../components/NavBar/index";
import Banner from "../../components/Banner/index";
import Row from "../../components/Rows/index";
import requests from "../../axios/Request";
function HomeScreen() {
  return (
    <div className="homeScreen">
      <Nav />
      <Banner />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        id="NO"
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} id="TN" />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} id="TR"/>
      <Row title="Action Movie" fetchUrl={requests.fetchActionMovies} id="AM"/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} id="CM" />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} id="HM" />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} id="RM"/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} id="D"/>
    </div>
  );
}

export default HomeScreen;
