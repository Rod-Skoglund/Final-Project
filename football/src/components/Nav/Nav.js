import React from "react";
import { Link } from "react-router-dom";

const Nav = props => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <Link className="navbar-brand" to="/">
      Drop-Kick Picks
    </Link>
    <div>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/leaderboard"
              className={
                window.location.pathname === "/leaderboard"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Leaderboard
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/picks"
              className={
                window.location.pathname === "/picks"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Weekly Picks
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/signin"
              className={
                window.location.pathname === "/" || window.location.pathname === "/signin"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Sign In / Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

// const Nav = () => (
//   <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
//     <a className="navbar-brand" href="/">
//       Drop-Kick Picks
//     </a>
//     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarNav">
//       <ul className="navbar-nav">
//         <li className="nav-item">
//           <a className="nav-link" href="/leaderboard">Leaderboard <span className="sr-only">(current)</span></a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="/picks/:id">Weekly Picks</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="/signin">Login/Logout</a>
//           {/* <a className="nav-link"><Link to = "/signIn" />Login/Logout</a> */}
//         </li>
//       </ul>
//     </div>    
//   </nav>
// );

export default Nav;
