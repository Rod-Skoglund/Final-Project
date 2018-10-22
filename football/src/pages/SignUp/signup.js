import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import SignUpForm from "../../components/SignUp";
import PropTypes from 'prop-types'


class SignUp extends Component {
  static propTypes ={
    loginCheck: PropTypes.func
  }

  render () {
    console.log('singup.js props', this.props)
    return (
    <SignUpForm loginCheck={ this.props.loginCheck }/>
    )
  }
}

// const SignUp = () => (
//   <SignUpForm/>
// )
export default SignUp;