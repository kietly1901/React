import React from "react";
import { Films } from "../shared/ListOfTopFilms";
import { useState } from "react";
export default function Top() {
  const [film, setFilm] = useState([])
  return (
    <>
    <div className="list-films-content">
      <div className="list-title-place">
        <div className="list-title">LASTEST MOVIES</div>
      </div>
      <div className="films">
        {Films.map((film) => (
          <div className="card">
            <div className="card-overlay">
              <button className="details-button" onClick={() => {
                    setFilm(film);
                  }}><a href="#popup1" id="openPopUp">Detail</a></button>
            </div>
            <img src={film.image}></img>
            <div className="card-infor-place">
              <div className="overload"></div>
              <div className="card-infor">
                {film.title} {film.Year}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div id="popup1" className="overlay">
    <div className="popup">
      <img src={film.image} />
      <h2>{film.title}</h2>
      <a className="close" href="#">
        &times;
      </a>
      <div className="content">{film.infor}</div>
    </div>
  </div>
    </>
  );
}
