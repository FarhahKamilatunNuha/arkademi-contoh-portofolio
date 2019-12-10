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
            <div className = 'text'>
              GO GREEN
            </div>
            </div>
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
 text: {
  position: "absolute",
  height: '36px',
  left: '73px',
  top: '51px',
  fontFamily: 'Poppins',
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontSize: '24px',
  lineHeight: '36px',
  textAlign: '35px'
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