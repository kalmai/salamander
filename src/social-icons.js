import React from 'react'
import './social-icons.css'

function Icons(){
    return (
        <div className="icon-container">
            <div className="social-icons">
            <a href="mailto:zacharykolker93@gmail.com">
                <img src="https://www.freepngimg.com/thumb/youtube/77700-icons-youtube-computer-logo-email-icon.png" alt="email icon" />
            </a>
            <a href="https://www.linkedin.com/in/zachary-kolker" target="_blank" rel="noopener noreferrer">
                <img src="https://image.flaticon.com/icons/svg/1384/1384014.svg" alt="linkedin icon"></img>
            </a>
            <a href="https://github.com/kalmai" target="_blank" rel="noopener noreferrer">
                <img src="https://image.flaticon.com/icons/png/512/25/25231.png" alt="github icon"></img>
            </a>
            </div>
        </div>
    );
}

export default Icons;