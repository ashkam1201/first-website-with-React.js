import './App.css';
import Navigation from "./Navigation";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Accueil from "./Accueil";
import About from "./About";
import ContactPage from "./Contactpage";

function App() {
  return (
  <div>
   <Router>
       <Navigation />
       <Route path={"/"} exact component={Accueil}/>
       <Route path={"/about"} exact component={About}/>
       <Route path={"/contact"} exact component={ContactPage}/>
   </Router>
</div>
);
}

export default App;
