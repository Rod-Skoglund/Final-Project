import API from "../../utils/API";
import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import "./SignInForm.css";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import PropTypes from "prop-types"

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
    console.log("SignInForm - props = ", this.props)
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <Container fluid>
      <Row>
        <div className="col-3"></div>
        <Col size="md">
          <div>
            <Jumbotron>
              <h1>Sign in for the Drop-Kick Picks</h1>
            </Jumbotron>
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
        </Col>
        <div className="col-3"></div>
      </Row>
      </Container>
    );
  }
}

export default SignInForm;

