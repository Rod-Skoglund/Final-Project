import React from "react";
import Picks from "./pages/MakePicks/Picks";
import Leaderboard from "./pages/Leaderboard/leaderboard";
import SignUp from "./pages/SignUp/signup";
import SignIn from "./pages/SignIn/signin";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Picks} />
        <Route exact path="/leaderboard" component={Leaderboard} />
        <Route exact path="/picks/:id" component={Picks} />
        <Route exact path="/signUp" component={SignUp} />
        <Route exact path="/signIn" component={SignIn} />
        <Route component={NoMatch} />
      </Switch>

    </div>
  </Router>
);

export default App;

