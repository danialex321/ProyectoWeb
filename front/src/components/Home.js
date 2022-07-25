import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import axios from "axios";
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
        <h1>Star Wars Version 2</h1>
        <h3>The greatest resource in the galaxy for Star Wars statistics!</h3>
        <hr />
        <a href="/add"><button class="btn btn-danger btn-lg"><span class="fa fa-plus"></span> Add New Character</button></a>
        
        <a href="/all"><button class="btn btn-danger btn-lg"><span class="fa fa-th-list"></span> All Characters</button></a>
      
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card mb-4">
            <div className="card-header">
              <h3>
                <strong>Character Search</strong>
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
                  <span className="fa fa-search"></span> Search Your Feelings.
                  You know it to be true.
                </button>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h3>
                <strong>Character Statistics</strong>
              </h3>
            </div>
            <div className="card-body">
              {
              data!= false ?  (
                <div>
                <h2 id="name">{data.name}</h2>
                <div id="stats">
                  <h3>
                    <strong>Role:</strong> <span id="role">{data.role}</span>
                  </h3>
                  <h3>
                    <strong>Age:</strong> <span id="age">{data.age}</span>
                  </h3>
                  <h3>
                    <strong>Force Points:</strong>{" "}
                    <span id="force-points">{data.forcePoints}</span>
                  </h3>
                </div>
              </div>
              ) : (<h2 id="name">Character not found</h2>)
               

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
