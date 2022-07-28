/*View Character database*/

import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import axios from "axios";
import "../components/All.css";
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />

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
              <div class="mt-5">
                <div class="d-style btn btn-brc-tp border-2 bgc-white btn-outline-blue btn-h-outline-blue btn-a-outline-blue w-100 my-2 py-3 shadow-sm">
                  <ul id="character-section" className="list-group"></ul>

                  {data.map((info) => {
                    return (
                      <li className="list-group-item" key={info.name}>
                        <div className= "container-card">
                          <div class="text-primary col-md-14">
                            <h4 class="pt-2 text-170 text-600 text-primary-d1 letter-spacing">{info.name} ({info.age})</h4>
                          </div>

                          <div class="text-secondary col-md-14">
                            <h4 class="pt-2 text-170 text-600 text-primary-d1 letter-spacing"> Director: {info.role}</h4>
                          </div>

                        <div class="text-secondary text-120">
                          <span class="ml-n15 align-text-bottom"></span><span class="text-180">Rating: {info.forcePoints}</span>
                        </div>
                        
                        </div>
                      </li>
                    );
                  })}
                  </div>
                  </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default All;
