import React, {useState} from 'react';
import Login from './components/Login';
import Signin from './components/Signin';
import FirstPage from './components/Firstpage';
import {BrowserRouter as Router, Routes, Route}from  "react-router-dom"
import './App.css';

function App() {  
  return (
    <Router>
      <div className = "container">
        <Routes>
          <Route path = "/" exact element = {<Login/>} />
          <Route path = "/signin" exact element = {<Signin/>} />
          <Route path = "/firstpage" exact element = {<FirstPage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
