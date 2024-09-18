import React from 'react';
import './index.css';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './Pages/HomePage';
import { AdminPage } from './Pages/AdminPage';

function App() {
  return (
    <div className="app">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminPage/>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
