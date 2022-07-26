/*View Character database*/

import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import axios from "axios";

function All() {
  useEffect(() => {
    getAllCharacters();
  }, []);

  const [data, setData] = useState([]);

  const getAllCharacters = () => {
    axios.get("https://star-wars-api-2022.herokuapp.com/api/characters").then((response) => {
      console.log(response);
      setData(response.data);
    });
  };

  return (
    <div className="App"><NavBar />
    <div className="container">
      <div className="jumbotron">
        <h1>Watched movies</h1>
        <h3>This is the list of the movies you have already watched!</h3>
        <hr />
        <a href="/">
          <button className="btn btn-danger btn-lg">
            <span className="fa fa-eye"></span> Search movie
          </button>
        </a>
        <a href="/add">
          <button className="btn btn-danger btn-lg">
            <span className="fa fa-plus"></span> Add movie
          </button>
        </a>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <strong>History of movies</strong>
            </div>
            <div className="card-body">
              <ul id="character-section" className="list-group"></ul>

              {data.map((info) => {
                return (
                  <li className="list-group-item" key={info.name}>
                    <h2>Name: {info.name}</h2>
                    <h3>Director: {info.role}</h3>
                    <h3>Year: {info.age}</h3>
                    <h3>Rating: {info.forcePoints}</h3>
                    <hr />
                  </li>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default All;
