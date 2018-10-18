import API from "../../utils/API";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./SignInForm.css";

// var axios=require("axios");

// var axios = require("axios");

class SignInForm extends Component {
  // Setting the component's initial state
  state = {
    username: "",
    password: "",
    active: "false"
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
    console.log("this.state.username = " + this.state.username)
      API.getUser(this.state.username)
      .then(res => {
        console.log(res.data);
        console.log("res.data.password = " + res.data[0].password)
        if (this.state.password !== res.data[0].password) {
          // console.log("SignIn-SignInForm.js - password != user password");
          // console.log("SignIn-SignInForm.js - username = " + this.username);
          // console.log("SignIn-SignInForm.js - password = " + this.password);
          alert("Incorrect Password");
        } else {
          console.log("SignIn-SignInForm.js - password = confirm password");
          // API.getUser({
          //   "username": this.state.username //,
            // "password": this.state.password,
            // "active": this.active
          // })
          // console.log("SignIn-SignInForm.js - username = " + this.username);
          // console.log("SignIn-SignInForm.js - password = " + this.password);
        }
    
        // currentPassword = res.data.password;
        // console.log("SignIn-SignInForm.js - currentPassword = " + currentPassword);
      }).catch(err => console.log(err));
    // console.log(`SignIn-SignInForm.js - username = ${this.state.username}`);
    // console.log(`SignIn-SignInForm.js - password = ${this.state.password}`);
    // console.log("SignIn-SignInForm.js - API.getUser(this.state.username) = ")

  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <p>
          Sign in for the Drop-Kick Picks
        </p>
        <form className="SignInForm" onSubmit={this.handleFormSubmit}>
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
          <button type="submit">Submit</button>
          <Link to = "/signUp" />
        </form>
      </div>
    );
  }
}

export default SignInForm;