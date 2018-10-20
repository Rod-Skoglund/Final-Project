import API from "../../utils/API";
import React, { Component } from "react";
import "./SignInForm.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types"
// import App from "../../App";
// var axios=require("axios");

// var axios = require("axios");

class SignInForm extends Component {
  static propTypes = {
    loginCheck: PropTypes.func
  }
  
  state = {
    username: "",
    password: "",
    active: false
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    if (name === "password") {
      value = value.substring(0, 15);
    }
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // let currentPassword = "";
    console.log("this.state.username = " + this.state.username);
    API.getUser(this.state.username)
    .then(res => {
      console.log("SignInForm - API.getUser - res.data = ");
      console.log(res.data);
      // console.log("res.data.password = " + res.data[0].password);
      console.log("res.data.length = " + res.data.length);

      if (res.data.length === 0) {
        alert("Username does not exist - please enter a valid Username");
      } else if (this.state.password !== res.data[0].password) {
        alert("Incorrect Password");
      } else {
        console.log("SignIn-SignInForm.js - password = confirm password");
        this.props.loginCheck(true)
      }
    
  
    }).catch(err => console.log(err))
  };

  render() {
    console.log("props = ", this.props)
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <p>
          Sign in for the Drop-Kick Picks
        </p>
        <form className="SignInForm">
          <input
            value={this.state.username}
            name="username"
            onChange={this.handleInputChange}
            type="String"
            placeholder=" User Name"
          /><br/>
         <input
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            type="password"
            placeholder=" Password"
          />
          <br/>
          <button onClick={this.handleFormSubmit}>Submit</button>
          <span>    </span>
          <button><Link to = "/signUp">Create New Account</Link></button>
        </form>
      </div>
    );
  }
}

export default SignInForm;

// *******************************************************

// import API from "../../utils/API";
// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import "./SignInForm.css";

// // var axios = require("axios");

// class SignInForm extends Component {
//   // Setting the component's initial state
//   constructor(props) {
//     super(props);
//     console.log("SignInForm - this.props " + JSON.stringify(this.props)); //props will get logged.
//     state = {
//       username: "",
//       password: "",
//       active : "false"
//     };
//   };
// };

//   handleInputChange = event => {
//     // Getting the value and name of the input which triggered the change
//     let value = event.target.value;
//     const name = event.target.name;

//     if (name === "password") {
//       value = value.substring(0, 15);
//     };
//     // Updating the input's state
//     this.setState({
//       [name]: value
//     });
//   };

//   handleFormSubmit = event => {
//     // Preventing the default behavior of the form submit (which is to refresh the page)
//     event.preventDefault();
//     // let currentPassword = "";
//     console.log("this.state.username = " + this.state.username);
//       API.getUser(this.state.username)
//       .then(res => {
//         console.log(res.data);
//         console.log("res.data.password = " + res.data[0].password);
//         if (this.state.password !== res.data[0].password) {
//           alert("Incorrect Password");
//         } else {
//           console.log("SignIn-SignInForm.js - password = confirm password");
//         }
    
//       }).catch(err => console.log(err))
//     };

//   render() {
//     // Notice how each input has a `value`, `name`, and `onChange` prop
//     return (
//       <div>
//         <p>
//           Sign in for the Drop-Kick Picks
//         </p>
//         <form className="SignInForm" onSubmit={this.handleFormSubmit}>
//           <input
//             value={this.state.username}
//             name="username"
//             onChange={this.handleInputChange}
//             type="String"
//             placeholder=" User Name"
//           /><br/>
//          <input
//             value={this.state.password}
//             name="password"
//             onChange={this.handleInputChange}
//             type="password"
//             placeholder=" Password"
//           />
//           <br/>
//           <button type="submit">Submit</button>
//           {/* <Link to = "/signUp">Create New User</Link> */}
//         </form>
//       </div>
//     );
//   };

// export default SignInForm;