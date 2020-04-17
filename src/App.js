import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { CCP } from './CCP'
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

const ccpUrl = "https://angela-isengard.awsapps.com/connect/ccp-v2";
const region = "us-west-2";

class App extends Component {
  render() {
    console.log("window.ccp looks like");
    console.log(window.ccp)
    return (
      <CCP ccpUrl={ccpUrl} region={region}/>
    );
  }
}

export default withAuthenticator(App, true);
