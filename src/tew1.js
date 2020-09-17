import React from 'react';
import './tew1.css'
import Header from './header.js'

function tew1(){
    return(
        <div id="tew1Container">
            <Header title="Tech Elevator Blog"/>
            <h3>Week: 1</h3>
            <div className="te-image">
            <img src="https://i.imgur.com/VUJ3RrB.jpg" alt="desktop" />
            </div>
            <p></p>
            <div>My name is Zachary, these blog entries document my progress through Tech Elevator. <br /><br />

This week I've learned after extensive use of Bash to push, pull, and create/move/remove files. I've always enjoyed not touching a mouse so this has been super useful. The idea that you need to give variables significant names was once more reinforced. My friend who got me into programming didn't appreciate me naming variables 'inappropriateWordHere' and my lack of indentation which I'm learning to appreciate more now. We also worked on logic and then after that for loops. Finally we moved into eclipse to create and run actual Java programs. One problem I remember was converting a decimal number to binary. Although I didn't know how to solve this mathematically, I was able to take the formula online and convert it into working code. I'm really looking forward to week two!</div>
        </div>
    );
}

export default tew1;
