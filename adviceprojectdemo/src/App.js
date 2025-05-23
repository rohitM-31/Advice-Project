import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Advice from './components/StaticAdv';
import SearchAdv from './components/SearchAdv';
import Navbar from './components/Navbar'; 

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid bg-gradient p-5 min-vh-100">
        <Navbar />
        <div className="row justify-content-center">
          <div className="col-md-8 text-center text-white">
            <h1 className="display-4 mb-4">Advice Generator App</h1>
            <Routes>
              <Route path="/" element={<Advice />} />
              <Route path="/search" element={<SearchAdv />} />
              <Route path="*" element={<h2 className="text-white">Page Not Found!</h2>} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
