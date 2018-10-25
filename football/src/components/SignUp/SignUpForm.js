import API from "../../utils/API";
import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import "./SignUpForm.css";
import { Link, Redirect } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import PropTypes from "prop-types"

class SignUpForm extends Component {
  // Setting the component's initial state
  state = {
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    confirmPassword: "",
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

    if (!this.state.firstName || !this.state.lastName || !this.state.username) {
      alert("Fill out your username, first and last name please!");
    } else if (this.state.password.length < 6) {
      alert(
        `Choose a more secure password ${this.state.firstName} ${this.state.lastName}`
      );
    } else if (this.state.password !== this.state.confirmPassword){
      alert("Passwords must match!");
    } else {
      console.log("SignUp-SignUpForm.js - password = confirm password");
      API.saveUser({
        "firstName": this.state.firstName,
        "lastName": this.state.lastName,
        "username": this.state.username,
        "password": this.state.password,
        "active": this.active
      }).catch(err => console.log("SignUpForm - API.saveUser - err = ", err))
    
      this.props.loginCheck(true)
    }
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <Container fluid>
        <Row>
          <div className="col-3"></div>
          <Col size="md">
            <div>
              <Jumbotron>
                <h1>Sign up for the Drop-Kick Picks</h1>
              </Jumbotron>
              <form className="SignUpForm">
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
          </Col>
          <div className="col-3"></div>
        </Row>
      </Container>
    );
  }
}

export default SignUpForm;