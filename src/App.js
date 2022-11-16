import LoginPage from "./LoginPage";
import "./App.css";
import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import MainPage from "./MainPage";

function App() {
  return (
    <>
      <div>
        <style>{"body {background-color:#edc7b7;}"}</style>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="main" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
