import { Routes, Route } from "react-router-dom";
import { useState, useEffect, createContext } from "react";
import '../style/index.css';
import Home from "../pages/Home";
import Liked from "../pages/Liked";
import User from "../pages/User";
import Add from "../pages/Add";
import Log from "../pages/Log";

function App() {


    return(
        <>
            <Routes>
                <Route path="/user" element={<User />} />
                <Route path="/" element={<Log />} />
                <Route path="/add" element={<Add />} />
                <Route path="/home" element={<Home />} />
                <Route path="/favs" element={<Liked />} />
                <Route path="*" element={<h2>Страница не найдена</h2>} />
            </Routes>
        </>
    );
  }
  
  export default App;