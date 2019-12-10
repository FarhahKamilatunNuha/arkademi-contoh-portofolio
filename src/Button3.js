import React, { Component } from 'react';

const Button3 = props => {
    return(
        <div style={styles.button}>
            {props.title}
        </div>
    )
}

export default Button3
const styles={
    button:{
        position: "absolute",
        width: '195px',
        height: '55px',
        left: '542px',
        top: '411px',
        background: '#E67E22',
        borderRadius: '100px'
    }
}