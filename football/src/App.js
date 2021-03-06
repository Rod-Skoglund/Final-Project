import React, { Component } from "react";
import Picks from "./pages/MakePicks/Picks";
import Leaderboard from "./pages/Leaderboard/leaderboard";
import SignUp from "./pages/SignUp/signup";
import SignIn from "./pages/SignIn/signin";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';

const ProtectedRoute = ({ component: Component, isLoggedIn, ...rest}) => (
  <Route { ...rest } render={props => {
    console.log(isLoggedIn);
    console.log(props);
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
    isLoggedIn: false
  }

componentDidMount() { console.log("App.js - Did Mount")}
  loginCheck = (bool) => {
    console.log("App.js - BOOL: ", bool);
    this.setState({
      isLoggedIn: bool
    })
  }

  render() {
    console.log(this.state.isLoggedIn);
    return (
      <Router>
        <div>
          <Nav isLoggedIn={ this.state.isLoggedIn }/>
          <Switch>
          <Route exact path="/" render={() => (
              this.state.isLoggedIn ? (
                <Leaderboard/>
              ) : (
                <SignIn loginCheck={ this.loginCheck }/>
              )
            )}/>
            <Route exact path="/signup" render={() => (
              this.state.isLoggedIn ? (
                <Leaderboard/>
              ) : (
                <SignUp loginCheck={ this.loginCheck }/>
              )
            )}/>
            {/* <ProtectedRoute isLoggedIn={ this.state.isLoggedIn } exact path="/login" loginCheck={ this.loginCheck } component={ Login }/> */}
            <ProtectedRoute isLoggedIn={ this.state.isLoggedIn } exact path="/leaderboard" component={ Leaderboard }/>
            <ProtectedRoute isLoggedIn={ this.state.isLoggedIn } exact path="/picks/:id" component={ Picks }/>
            <ProtectedRoute isLoggedIn={ this.state.isLoggedIn } exact path="/picks" component={ Picks }/>
            {/* <Route isLoggedIn={ this.state.isLoggedIn } exact path="/signup" component={SignUp} /> */}
            <Route isLoggedIn={ this.state.isLoggedIn } exact path="/signin" component={SignIn} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
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

