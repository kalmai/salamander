import React from 'react';
import './footer.css'

function Footer(){
    return(
        <div id="footContainer">
            <h3>Like what you see?</h3>
            <p>Connect with me via email or social media!</p>
            <p><a href="mailto:zacharykolker93@gmail.com">zacharykolker93@gmail.com</a></p>
            <div className="social">
                <div id="icons">
                    <a href="https://www.linkedin.com/in/zachary-kolker" target="_blank" rel="noopener noreferrer">
                        <img src="https://image.flaticon.com/icons/svg/1384/1384014.svg" alt="linkedin logo"></img>
                    </a>
                    <a href="https://github.com/kalmai" target="_blank" rel="noopener noreferrer">
                        <img src="https://image.flaticon.com/icons/png/512/25/25231.png" alt="github logo"></img>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;