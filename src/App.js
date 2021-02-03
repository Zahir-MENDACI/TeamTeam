import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import Abonnement from './components/Abonnement.js';
import Coach from './components/Coach.js';
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
      {/* page d'abonnement */}
      {/* <Abonnement /> */}

      {/* page D'acceuil */}
      <div class="btndiv">
        <button class="button">S'inscrire à un cours</button>
        <button class="button">Prendre un abonnement</button>
      </div>

      {/* page des Coach */}
       {/* <Coach /> */}
      <Footer />
    </div>
  );
}

export default App;
