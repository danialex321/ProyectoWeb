import { useContext } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap";
import Home from "./components/Home";
import Login from "./components/Login";
import { useLocation, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import AuthContext from "./store/auth-context";
import RequireAuth from "./components/RequireAuth";
import All from './components/All';
import Add from './components/Add';

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Routes>
      {/* protected routes routes  */}
      <Route element={<RequireAuth />}>
        <Route path="/" exact element={<Home />}></Route>
      </Route>
      <Route element={<RequireAuth />}>
        <Route path="/all" element={<All />}   /></Route>
      <Route element={<RequireAuth />}>
        <Route path="/add" element={<Add />}   /></Route>
      {/* public routes  */}
      <Route path="/Login" element={<Login />}></Route>
      <Route path="/Register" element={<Register />}></Route>
    </Routes>
  );
}

export default App;
