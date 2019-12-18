import React, { Component } from 'react';
import Background from './bgmoss.png';
import Button3 from './Button3';

class App extends Component {
  render(){
    return(
      <div style={styles.Background}>
          <div style={styles.container}>
            <div style={styles.h1}>
              Make it green
            </div>
            <div style= { styles.gogreen }>
              GO GREEN 
            </div>
            </div>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g className="calendar">
            <path className="icon/action/calendar" fill-rule="evenodd" clip-rule="evenodd" d="M42 11H6V15H42V11ZM42 19H6V29H42V19ZM38 25V23H10V25H38ZM42 33H6V37H42V33Z" fill="#E67E22"/>
            </g>
            </svg>
            <div style={styles.subTittle}>
              Now more than ever. Our planet is need our
            </div>
            <div style={styles.wrapperInput}>
              <Button3 title="Do it Now"/>
              </div>
            </div>
    );
  }
}
let w = window.innerWidth;
const styles ={
  Background:{
    display: 'flex',
    backgroundImage: `url(${Background})`,
    height: '100%',
    position: "absolute",
    top:0,
    right:0,
    left:0,
    bottom:0,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },
  container:{
    display:'flex',
    flexDirection:'column',
    alignItems: 'center',
    fontFamily: 'Poppins'
  },
  h1: {
    position: "absolute",
    width: '338px',
    height: '72px',
    left: '471px',
    top: '253px',
    fontFamily: 'Poppins',
    color: '#FFFFFF',
    fontStyle: 'normal',
    fontWeight: 800,
    fontSize: '48px',
    lineHeight: '72px'
  },
 gogreen: {
  position: "absolute",
  left: '73px',
  top: '57px',

  fontFamily: 'Poppins',
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontSize: '24px',
  lineHeight: '36px',

  textAlign: 'center',
  color: '#FFFFFF'
 },
 calendar:{
  position: "absolute",
  left: '12.5%',
  top: '39.92%',
  right: '120.50',
  bottom: '39.92%',
 },
  wrapperInput: {
    display: 'flex',
    alignSelf: 'center',
    marginTop: '600px',
    alignItems: 'center',
    color: '#FFFFFF',
    borderRadius: '5px',
    textAlign: 'center',
    padding : '100px',
    textDecoration: 'none',
    width: '400px',
    height: '360px',
    left: '582px',
    top: '421px',
    paddingTop: '100px',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '24px',
    lineHeight: '50px'
  },
  subTittle: {
    position: "absolute",
    width: '520px',
    height: '36px',
    left: '380px',
    top: '325px',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '24px',
    lineHeight: '36px',
    textAlign: 'center',
    color: '#FFFFFF',
  },
}

export default App;