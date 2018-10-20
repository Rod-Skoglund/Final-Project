import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import SignInForm from "../../components/SignIn";
import PropTypes from 'prop-types'

class SignIn extends Component {
  static propTypes ={
    loginCheck: PropTypes.func
  }

  render () {
    // console.log('singin.js props', this.props)
    return (
    <SignInForm loginCheck={ this.props.loginCheck }/>
    )
  }
}
// const SignIn = () => (
//   <SignInForm loginCheck={ this.props.loginCheck }/>
// )
export default SignIn;