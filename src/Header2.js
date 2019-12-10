import React, { Component } from 'react';

const Header2 = props => {
    return(
        <div style={styles.topText}>
            {props.title}
        </div>
    )
}

export default Header2
const styles={
    topText:{
        alignSelf: 'center',
        marginTop: 80,
        borderStyle: 'solid',
        borderWidth: 5,
        color: '#fff',
        justifyContent: 'center',
        padding: 10,
        fontWeight: 'bold'
    }
}