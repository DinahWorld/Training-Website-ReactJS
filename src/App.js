import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
// En gros BrowserRouter c'est pour afficher des liens
// directement sur la page sans modifier tout le contenu

//  Route c'est pour afficher plusieurs pages
//  Nous voulons une route pour certaine app 

// (Routes)Switch c'est pour indiquer qu'on veut 
// afficher une route en particulier
// Exemple si au path "/" je veux indiquer Hello World
// alors au /welcome je n'aurai pas Hello World
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    // On veut garder le Navbar dans chaque 
    //page du coup on le met dans Router
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
