import React from "react";
import { useEffect } from "react";
import Movie_card from "./Movie_card";
import { useState } from "react";
import "../components/movie.css";
import { IoMdSearch } from "react-icons/io";

const Movie = (props) => {
  // const setProgress = props;
  const [movieData, setMovieData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("batman");
  const apiUrl = `https://www.omdbapi.com/?i=tt3896198&apikey=54e2f07c&s=${searchTerm}`;
  const fetchApi = async () => {
    // console.log("start fetch");
    try {
      props.setProgress(20);
      const response = await fetch(apiUrl, {
        method: "GET",
      });
      props.setProgress(40);
      if (!response.ok) {
        props.setProgress(100);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      props.setProgress(60);
      const data = await response.json();
      props.setProgress(80);
      setMovieData(data.Search);
      props.setProgress(100);
      console.log(`Response data is ${JSON.stringify(data)}`);
      // console.log(`Movie data is ......${JS ON.stringify(movieData)}`);
    } catch (error) {
      console.error("Fetch error:", error);
    }
    // console.log("End fetch");
  };
  useEffect(() => {
    fetchApi();
  }, []);

  const handleOnchange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleOnClick = (e) => {
    e.preventDefault();
    fetchApi();
  };

  return (
    <>
    <div className="container">
    <div className="c1 d-flex justify-content-between mt-4">
          <div className="h4" style={{marginLeft:"18px"}}>
            <span>Movie Search App</span>
          </div>
          <div className="input-group mb-3 input">
            <input
              type="text"
              className="form-control"
              placeholder="Search for movies"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              value={searchTerm}
              onChange={handleOnchange}
            ></input>
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={handleOnClick}
              >
                <IoMdSearch />
              </button>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {movieData
              ? movieData.map((element, index) => {
                  return (
                    <div className="col-md-3" key={index}>
                      <Movie_card
                        Title={element.Title}
                        Poster={element.Poster}
                        Year={element.Year}
                      ></Movie_card>
                    </div>
                  );
                })
              : "No movies found"}
          </div>
        </div>
        <div className="c4"></div>
      </div>
    </>
  );
};

export default Movie;
