import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import Abonnement from './components/Abonnement.js';
import photo from './photo.jpg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Abonnement />
      {/* <div class="btndiv">
        <button class="button">S'inscrire à un cours</button>
        <button class="button">Prendre un abonnement</button>

      </div> */}
      <Footer />
    </div>
  );
}

export default App;
