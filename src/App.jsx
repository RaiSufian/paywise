import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/homePage';
import 'aos/dist/aos.css';
import AOS from 'aos';
import './App.css';

function App() {

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <Router>
      <Home />

    </Router>

  )
}

export default App
