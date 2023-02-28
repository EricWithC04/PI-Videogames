import { Switch, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage.jsx";
import Home from "./components/Home/Home.jsx";
import Error404 from "./components/Error404/Error404.jsx";
import CreateGame from "./components/CreateGame/CreateGame.jsx";
import Detail from "./components/Detail/Detail.jsx";
import About from "./components/About/About.jsx";
import axios from "axios";
import './App.css';
axios.defaults.baseURL = "https://pi-videogames-production-63da.up.railway.app/";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route 
          exact path="/"
          component={LandingPage}
        />
        <Route 
          exact path="/Home"
          component={Home}
        />
        <Route 
          exact path="/Home/AboutMe"
          component={About}
        />
        <Route 
          path="/Home/CreateGame"
          component={CreateGame}
        />
        <Route 
          path="/Home/:idGame"
          component={Detail}
        />
        <Route 
          path="*"
          component={Error404}
        />
      </Switch>
    </div>
  );
}

export default App;
