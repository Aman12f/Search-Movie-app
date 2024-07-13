import React from 'react';

const MovieCard = (props) => {
  const { Title, Poster,Year } = props;
  const placeholderImage = "https://via.placeholder.com/300x450?text=No+Image+Available"; // Placeholder image URL

  return (
    <>
     <div className="my-3 d-flex justify-content-center">
      <div className="card" style={{width: "18rem", position:"relative"}}>
        <img
          className="card-img-top"
          src={Poster ? Poster : placeholderImage}
          alt={Title}
        ></img>
        <div className="card-body">
          <h5 className="card-title">{Title}</h5>
          <p>{Year}</p>
        </div>
      </div>
      </div>
    </>
  );
};

export default MovieCard;
