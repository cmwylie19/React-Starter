import React, { Component } from 'react';
import logo from './logo.svg';
import "./index.css"
const AB = { a: 1, b: 2 }
const { a, b } = AB;
function AppShell(props) {
  return (
    <div>
    <div style={{
      position:"absolute",
      height: '70px',
      width: '100% !important',
      left: 0,
      right:0,
      backgroundColor:"blue",
      display: 'flex',
      justifyContent:'center',
      alignItems: 'center',
      color: "white"
      }}>I am the top Panel</div>
    <div {...props}  className="centerMe" style={props.styles}>
     
      Hello, {props.name.name}<br />
      My age is {props.name.age}
      <br />
      A is {a}
      <br />
      The day is {props.day}
    
    <div style={{backgroundColor:"green"}}>Hello THERE</div>
    </div>
    <div style={{
      position:"absolute",
      height: '70px',
      width: '100% !important',
      left: 0,
      right:0,
      bottom:0,
      backgroundColor:"blue",
      display: 'flex',
      justifyContent:'center',
      alignItems: 'center',
      color: "white"
      }}>I am the bottom Panel</div>
    </div>
  );
}
class AppContainer extends Component {

  render() {
    const AppShell = {
      Container: {
        height: '100vh',
        width: '100% !important',
        backgroundColor: "#fbfbfb",
        display: "flex",
        justifyContent: "center",
        flexDirection: 'rows',
        alignItems: 'center'
      }
    }
    return <App styles={AppShell.Container} day="Wednesday" />
  }
}
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "Tiff",
      age: "23"
    }
  }

  render() {
    return (
      <AppShell {...this.props} styles={this.props.styles} backgroundColor={this.props.backgroundColor} name={this.state} day={this.props.day} />
    )
  }
}


export default AppContainer;
