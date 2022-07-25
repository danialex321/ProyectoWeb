/*unused file*/
import React, { useState } from "react";

function AddTodo(props) {
  // Individual para el que se agrega
  const [todo, setTodo] = useState("");

  const getTodo = (e) => {
    setTodo(e.target.value);
  };

  return (
    <div className="row mb-4 ">
      <div className="col mx-sm-3 mb-2 col-5">
        <div className="d-flex">
          <a href="/">
            <button
              id="add-btn-vistas"
              className="btn btn-primary"
              onClick={() => {
                props.agregar(todo);
                setTodo("");
              }}
            >
              Agregar a "vistas" 
            </button>
          </a>
          <a href="/">
            <button
              id="add-btn-viendo"
              className="btn btn-primary"
              onClick={() => {
                props.agregar(todo);
                setTodo("");
              }}
            >
              Agregar a "viendo"
            </button>
          </a>
          <a href="/">
            <button
              id="add-btn-por-ver"
              className="btn btn-primary"
              onClick={() => {
                props.agregar(todo);
                setTodo("");
              }}
            >
              Agregar a "por ver"
            </button>
          </a>
        </div>
      <input
          type="text"
          placeholder="agregar a la lista"
          id="new-todo"
          className="form-control"
          onChange={getTodo}
          value={todo}
        />
      </div>
    </div>
  );
}

export default AddTodo;
