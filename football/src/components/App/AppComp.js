import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Leaderboard from "./pages/Leaderboard";
import SignIn from "./pages/SignIn";

// const ProtectedRoute = ({ component: Component, isLoggedIn, ...rest}) => (
//   <Route { ...rest } render={props => {
//     console.log(isLoggedIn);
//     return (
//       isLoggedIn ? (
//         <Component { ...props }/>
//       ) : (
//         <Login loginCheck={ this.loginCheck }/>
//       )
//     )
//   }}/> 
// );

class AppComp extends Component {

  state = {
    isLoggedIn: false
  }

  loginCheck = (bool) => {
    console.log("football\src\components\App\AppComp.js - BOOL: ", bool);
    this.setState({
      isLoggedIn: bool
    })
  }

  render() {
    console.log(this.state.isLoggedIn);
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => (
            this.state.isLoggedIn ? (
              <Leaderboard/>
            ) : (
              <SignIn loginCheck={ this.loginCheck }/>
            )
          )}/>
          {/* <ProtectedRoute isLoggedIn={ this.state.isLoggedIn } exact path="/login" loginCheck={ this.loginCheck } component={ Login }/> */}
          {/* <ProtectedRoute isLoggedIn={ this.state.isLoggedIn } exact path="/index" component={ MainIndex }/> */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default AppComp;