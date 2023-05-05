import './App.css';
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Calculator from './components/Calculator';
import Quotes from './components/Quote';
import Home from './components/Home';
import NotFound from './components/NotFound';

function App() {
  return (
    <>
      <nav className="NavBar">
        <ul className="NavList">
          <li className="NavItem"><Link to="/">Home</Link></li>
          <li className="NavItem"><Link to="/calculator">calculator</Link></li>
          <li className="NavItem"><Link to="/Quotes">Quotes</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/Quotes" element={<Quotes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
