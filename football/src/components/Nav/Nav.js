import React from "react";
import { Link } from "react-router-dom";

const Nav = props => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-success text-white mt-2">
    <Link className="navbar-brand" to="/">
      Drop-Kick Picks
    </Link>
    <div>
      <button className="navbar-toggler text-white" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item mt-2">
            <Link
              to="/leaderboard" className="nav-link text-white"
              // className={
              //   window.location.pathname === "/leaderboard"
              //     ? "nav-link active"
              //     : "nav-link"
              // }
            >
              Leaderboard
            </Link>
          </li>
          <li className="nav-item mt-2">
            <Link
              to="/picks" className="nav-link text-white"
              // className={
              //   window.location.pathname === "/picks"
              //     ? "nav-link active"
              //     : "nav-link"
              // }
            >
              Weekly Picks
            </Link>
          </li>
          <li className="nav-item mt-2">
          {/* try anchor - look at react-router for simple authentication */}
            <Link
              // to={{pathname: "/", state: props.isLoggedIn}} 
              to={{pathname: "/", state: {isLoggedIn: false}}} className="nav-link text-white"
              // className={
              //   window.location.pathname === "/" //|| window.location.pathname === "/signin"
              //     ? "nav-link active"
              //     : "nav-link"
              // }
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

// ***************************************************************
// import React from "react";
// import { Link } from "react-router-dom";

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
//         <li className="nav-item active">
//           <Link to="/leaderboard" className="nav-link">Leaderboard <span className="sr-only">(current)</span></Link>
//           {/* <a className="nav-link" href="/leaderboard">Leaderboard <span className="sr-only">(current)</span></a> */}
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="/picks/:id">Weekly Picks</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="/signin">Login/Logout</a>
//         </li>
//       </ul>
//     </div>    
//   </nav>
// );

// export default Nav;
