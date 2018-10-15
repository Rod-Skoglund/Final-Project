import API from "../../utils/API";
import React, { Component } from "react";
import "./Form.css";
// var axios=require("axios");

// var axios = require("axios");

class Form extends Component {
  // Setting the component's initial state
  state = {
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    confirmPassword: ""
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

    if (!this.state.firstName || !this.state.lastName || !this.state.username) {
      alert("Fill out your username, first and last name please!");
    } else if (this.state.password.length < 6) {
      alert(
        `Choose a more secure password ${this.state.firstName} ${this.state.lastName}`
      );
    } else if (this.state.password !== this.state.confirmPassword){
      alert("Passwords must match!");
    } else {
      /////////////////////////////////AXIOS REQUEST TO EXpress server
      console.log("SignUp-Form.js - password = confirm password");
      API.saveUser({
        "firstName": this.state.firstName,
        "lastName": this.state.lastName,
        "username": this.state.username,
        "password": this.state.password
      })
    //   alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
    //   axios.post("/signup",{
    //     "firstName": this.state.firstName,
    //     "lastName": this.state.lastName,
    //     "username":this.state.username,
    //     "password":this.state.password
    //   // "email":this.state.email,
    //   // "password":this.state.password
    //   }).then(response => "/")
    //     .catch(err=>console.log(err));
    // };
// {
//       alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
//     }
//     if(this.state.password===this.state.confirmPassword){
//           /////////////////////////////////AXIOS REQUEST TO EXpress server
      // console.log("SignUp-Form.js - password = confirm password");
      // API.saveUser({
      //   "firstName": this.state.firstName,
      //   "lastName": this.state.lastName,
      //   "username":this.state.username,
      //   "password":this.state.password
      // });
    //   axios.post("/signup",{
    //     "firstName": this.state.firstName,
    //     "lastName": this.state.lastName,
    //     "username": this.state.username,
    //     "password": this.state.password
    //   // "email":this.state.email,
    //   // "password":this.state.password
    // // }).then(response => window.location.href = "/" + response)
    //     }).then(function (response) {
    //       console.log(response);
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
      }
    // else {
    //   alert("Passwords must match!");
    // };

//     // console.log("signUp/Form - firstName = " + this.state.firstName );
//     // console.log("signUp/Form - lastName = " + this.state.lastName );
//     // console.log("signUp/Form - username = " + this.state.username );
//     // console.log("signUp/Form - password = " + this.state.password );
//     /////////////////////////////////AXIOS REQUEST TO EXpress server
//     // this.setState({
//     //   email: "",
//     //   password: "",
//     //   confirmPassword: ""
//     // });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <p>
          Sign up for the Drop-Kick Picks
        </p>
        <form className="form">
          <input
            value={this.state.firstName}
            name="firstName"
            onChange={this.handleInputChange}
            type="String"
            placeholder=" First Name"
          /><br/>
          <input
            value={this.state.lastName}
            name="lastName"
            onChange={this.handleInputChange}
            type="String"
            placeholder=" Last Name"
          /><br/>
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
          /><br/>
          <input
            value={this.state.confirmPassword}
            name="confirmPassword"
            onChange={this.handleInputChange}
            type="password"
            placeholder=" confirmPassword"
          />
          <br/>
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;