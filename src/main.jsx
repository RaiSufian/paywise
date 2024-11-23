
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx';
import axios from "axios";
import './index.css';
import 'react-toastify/dist/ReactToastify.css';


axios.defaults.baseURL = "https://paywizelimited.co.uk/api/";
createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>,
)
