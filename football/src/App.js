import React, { Component } from "react";
import Picks from "./pages/MakePicks/Picks";
import Leaderboard from "./pages/Leaderboard/leaderboard";
import SignUp from "./pages/SignUp/signup";
import SignIn from "./pages/SignIn/signin";
import Nav from "./components/Nav";
import NoMatch from "./pages/NoMatch";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';

const ProtectedRoute = ({ component: Component, isLoggedIn, ...rest}) => (
  <Route { ...rest } render={props => {
    console.log(isLoggedIn);
    return (
      isLoggedIn ? (
        <Component { ...props }/>
      ) : (
        <SignIn loginCheck={ this.loginCheck }/>
      )
    )
  }}/> 
);

class App extends Component {

  state = {
    isLoggedIn: true
  }

  loginCheck = (bool) => {
    console.log("App.js - BOOL: ", bool);
    this.setState({
      isLoggedIn: bool
    })
  }

  render() {
    console.log(this.state.isLoggedIn);
    return (
      <div>
        <Nav />
        <Router>
          <Switch>
            <Route exact path="/" render={() => (
              this.state.isLoggedIn ? (
                <Leaderboard/>
              ) : (
                <SignIn loginCheck={ this.loginCheck }/>
              )
            )}/>
            {/* <ProtectedRoute isLoggedIn={ this.state.isLoggedIn } exact path="/login" loginCheck={ this.loginCheck } component={ Login }/> */}
            <ProtectedRoute isLoggedIn={ this.state.isLoggedIn } exact path="/leaderboard" component={ Leaderboard }/>
            <ProtectedRoute isLoggedIn={ this.state.isLoggedIn } exact path="/picks/:id" component={ Picks }/>
            <ProtectedRoute isLoggedIn={ this.state.isLoggedIn } exact path="/picks" component={ Picks }/>
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/signin" component={SignIn} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </div>
    );
  }
}

  // <Router>
  //   <div>
  //     <Nav />
  //     <Switch>
  //       <Route exact path="/" component={Picks} />
  //       <Route exact path="/leaderboard" component={Leaderboard} />
  //       <Route exact path="/picks/:id" component={Picks} />
  //       <Route exact path="/signUp" component={SignUp} />
  //       <Route exact path="/signIn" component={SignIn} />
  //       <Route component={NoMatch} />
  //     </Switch>

  //   </div>
  // </Router>
// );

export default App;

