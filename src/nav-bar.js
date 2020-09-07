import React from 'react';
import './NavBar.css'
import Home from './home.js'
import TEW1 from './tew1.js'
import TEW2 from './tew2.js'
import TEW3 from './tew3.js'
import TEW4 from './tew4.js'
import TEW5 from './tew5.js'
import TEW6 from './tew6.js'
import Construction from './wip.js'
import Doppio from './doppio.js'
import Salamander from './salamander.js'
import SCalice from './sc-alice.js'
import Fallacy from './fallacy.js'

const NavBar = ({ page }) => {
    return (
        <div className="NavBar">
            <ul id="master">
                <div onClick={() => {page(<Home />); window.scrollTo(0,0)}}><li id="topic">Home</li></div>
                <li id="topic">Tech Elevator Blog</li>
                <ul>
                    <li><span onClick={() => {page(<TEW1 />); window.scrollTo(0,0)}}>Week 1</span></li>
                    <li><span onClick={() => {page(<TEW2 />); window.scrollTo(0,0)}}>Week 2</span></li>
                    <li><span onClick={() => {page(<TEW3 />); window.scrollTo(0,0)}}>Week 3</span></li>
                    <li><span onClick={() => {page(<TEW4 />); window.scrollTo(0,0)}}>Week 4</span></li>
                    <li><span onClick={() => {page(<TEW5 />); window.scrollTo(0,0)}}>Week 5</span></li>
                    <li><span onClick={() => {page(<TEW6 />); window.scrollTo(0,0)}}>Week 6</span></li>
                    {/* <li><span onClick={() => page(<Construction />)}>Graduation</span></li> */}
                </ul>
                <li id="topic">Mechanical Keyboards</li>
                <ul>
                    <li><span onClick={() => {page(<Doppio />); window.scrollTo(0,0)}}>Doppio80</span></li>
                    <li><span onClick={() => {page(<Salamander />); window.scrollTo(0,0)}}>Salamander</span></li>
                    <li><span onClick={() => {page(<SCalice />); window.scrollTo(0,0)}}>SC Alice</span></li>
                    <li><span onClick={() => {page(<Fallacy />); window.scrollTo(0,0)}}>Fallacy</span></li>
                </ul>
                {/* <li id="topic"><span onClick={() => page(<Construction />)}>Flash-Card App</span></li> */}
            </ul>
        </div>
    );
}

export default NavBar;