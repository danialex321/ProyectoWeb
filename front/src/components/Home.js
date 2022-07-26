/*Search watched movie*/

import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import axios from "axios";
import "../components/Home.css";
function Home() {
  
  const [character, setCharacter] = useState("");
  const [data, setData] = useState({});

  const searchCharacter = () => {
    axios
      .get("https://star-wars-api-2022.herokuapp.com/api/characters/" + character)
      .then((response) => {
        console.log(response);
        setData(response.data);
      });
  };

  return (

    <div className="App"><NavBar />

    <div className="container">
      <div className="jumbotron">
        <h1>My movies</h1>
      </div>
      <div className="extraBtn">
        <a href="/add"><button class="btn btn-danger btn-lg"><span class="fa fa-plus"></span> Add movie</button></a>
        
        <a href="/all"><button class="btn btn-danger btn-lg"><span class="fa fa-th-list"></span> Show all watched movies</button></a>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card mb-4">
            <div className="card-header">
              <h3>
                <strong>Search movies:</strong>
              </h3>
            </div>
            <div className="card-body">
              <input
                type="text"
                id="character-search"
                className="form-control"
                value={character}
                onChange={(e) => setCharacter(e.target.value)}
              />
              <br />
              <div className="text-right">
                <button
                  className="btn btn-primary btn-md"
                  id="search-btn"
                  onClick={searchCharacter}
                >
                  <span className="fa fa-search"></span> Search movie because my memory doesn't serve me right.
                </button>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h3>
                <strong>Movie specs:</strong>
              </h3>
            </div>
            <div className="card-body">
              {
              data!= false ?  (
                <div>
                <div id="stats">
                  <h3>
                    <strong>Name:</strong> <span id="name">{data.name}</span>
                  </h3>
                  <h3>
                    <strong>Director:</strong> <span id="role">{data.role}</span>
                  </h3>
                  <h3>
                    <strong>Year:</strong> <span id="age">{data.age}</span>
                  </h3>
                  <h3>
                    <strong>Rating:</strong>{" "}
                    <span id="force-points">{data.forcePoints}</span>
                  </h3>
                </div>
              </div>
              ) : (<h2 id="name">Movie not found</h2>)
               

              }

            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Home;
