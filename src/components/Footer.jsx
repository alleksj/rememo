import React from 'react';

function Footer() {
    const date = new Date();
    const currentTime = date.getFullYear();

    return (
        <footer>
            <p>{currentTime}</p>
        </footer>
    );
}

export default Footer;