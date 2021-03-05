import React from 'react';

const Footer = () => {
    const style = {
        backgroundColor: 'black',
        color: 'white',
        textAlign: 'center',
        marginTop: '20px',
        height: '25px',
        position: 'fixed',
        bottom: '0px',
        width: '100%',
        marginTop: '25px'
    }

    return(
        <footer style={style}>
            2021 <span>&#169;</span> Reel Reviews
        </footer>
    )
}

export default Footer;