import React, { Component } from 'react';
import Background from './bg.png';
import Foto from './bali.png';
import Button from './Button';
import Button2 from './Button2';

class App extends Component {
  render(){
    return(
      <div style={styles.Background}>
        <div style={styles.overlay}>
          <div style={styles.container}>
            <img src={Foto} alt="" style={{height: 168, width: 150}} />
            <div style={styles.h1}>
              A Better way to 
              <div style={styles.h2}>
                travel to Bali
                </div>
            </div>
            <div style={styles.subTittle}>
              Cheapest and Easyer
            </div>
            <div style={styles.wrapperInput}>
              <Button2 title="Read More"/>
              <Button title="Reservation"/>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
let w = window.innerWidth;
let h = window.innerHeight;
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
  overlay: {
    backgroundColor: "rgba(81,77,67,0.7)",
    width: '100%',
    height: h
  },
  container:{
    display:'flex',
    flexDirection:'column',
    alignItems: 'center',
    fontFamily: 'Pacifico'
  },
  h1: {
    alignSelf: 'center',
    marginTop: 50,
    color: 'white',
    fontSize: 48,
    textAlign: 'center',
    maxWidht: 700
  },
  h2: {
    color: 'orange',
    textAlign: 'center',
    maxWidht: 700
  },
  wrapperInput: {
    display: 'flex',
    alignSelf: 'center',
    marginTop: 60
  },
  subTittle: {
    color: 'white',
    fontFamily: "Roboto",
    marginTop: 20
  },
}

export default App;