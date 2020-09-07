import React, { useState, useRef } from 'react';
import './mobile-nav.css'
import Home from './home.js'
import TEW1 from './tew1.js'
import TEW2 from './tew2.js'
import TEW3 from './tew3.js'
import TEW4 from './tew4.js'
import TEW5 from './tew5.js'
import TEW6 from './tew6.js'
import Doppio from './doppio.js'
import Salamander from './salamander.js'
import SCalice from './sc-alice.js'
import Fallacy from './fallacy.js'

const MobileNav = ({ mPage }) => {

    const [shownList, setShownList] = useState(false);

    function NavItem(props) {


        return (
            <div>
                <span onClick={() => setShownList(!shownList)}>{props.word}</span>
                {shownList && props.children}
            </div>
        )
    }

    function NavBar(props) {
        return (
            <nav>
                <div>
                    {props.children}
                </div>
            </nav>
        )
    }

    return (
        <>
            <div className="mobile-title-container">
                <div className="mobile-title">
                    <p>My GitPage</p>
                </div>
            </div>
            <div className="dropdown-container">
                {/* <button className="drop-button" onClick={}>Blog</button> */}
                <NavBar>
                    <NavItem word={"Menu"}>
                        <div className="nav-items">
                            <ul>
                                <li>Tech Elevator Blog</li>
                                <ul>
                                    <li><span onClick={() => { mPage(<TEW1 />); setShownList(!shownList); window.scrollTo(0, 0) }}>Week 1</span></li>
                                    <li><span onClick={() => { mPage(<TEW2 />); setShownList(!shownList); window.scrollTo(0, 0) }}>Week 2</span></li>
                                    <li><span onClick={() => { mPage(<TEW3 />); setShownList(!shownList); window.scrollTo(0, 0) }}>Week 3</span></li>
                                    <li><span onClick={() => { mPage(<TEW4 />); setShownList(!shownList); window.scrollTo(0, 0) }}>Week 4</span></li>
                                    <li><span onClick={() => { mPage(<TEW5 />); setShownList(!shownList); window.scrollTo(0, 0) }}>Week 5</span></li>
                                    <li><span onClick={() => { mPage(<TEW6 />); setShownList(!shownList); window.scrollTo(0, 0) }}>Week 6</span></li>
                                </ul>
                                <li>Mechanical Keyboards</li>
                                <ul>
                                    <li><span onClick={() => { mPage(<Doppio />); setShownList(!shownList); window.scrollTo(0, 0) }}>Doppio80</span></li>
                                    <li><span onClick={() => { mPage(<Salamander />); setShownList(!shownList); window.scrollTo(0, 0) }}>Salamander</span></li>
                                    <li><span onClick={() => { mPage(<SCalice />); setShownList(!shownList); window.scrollTo(0, 0) }}>SC Alice</span></li>
                                    <li><span onClick={() => { mPage(<Fallacy />); setShownList(!shownList); window.scrollTo(0, 0) }}>Fallacy</span></li>
                                </ul>
                            </ul>
                            <div className="close-menu">
                            <span onClick={()=> setShownList(!shownList)}>Close Menu</span><img src="https://icons-for-free.com/iconfiles/png/512/x-1321215629555778185.png" onClick={()=> setShownList(!shownList)}></img>
                            </div>
                            
                        </div>
                    </NavItem>
                </NavBar>

            </div>
            <div className="mobile-link-icons">
                <div className="mobile-icon-container">
                    <img src="https://cdn.onlinewebfonts.com/svg/img_66241.png" alt="home icon" onClick={() => { mPage(<Home />); window.scrollTo(0, 0) }}></img>
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
        </>
    );
}

export default MobileNav;