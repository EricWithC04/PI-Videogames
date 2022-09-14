import { Switch, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage.jsx";
import Home from "./components/Home/Home.jsx";
import Error404 from "./components/Error404/Error404.jsx";
import CreateGame from "./components/CreateGame/CreateGame.jsx";
import './App.css';

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
          path="/Home/CreateGame"
          component={CreateGame}
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
