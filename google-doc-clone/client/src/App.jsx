import React from "react";
import "./App.css";
import Editor from "./components/Editor";

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { v4 as uuid } from "uuid";

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/docs/:id" element={<Editor  />} />
      <Route path="/" element={<Navigate replace to ={`/docs/${uuid()}`}/>} /> 
      </Routes>
    </Router>
  );
};

export default App;
