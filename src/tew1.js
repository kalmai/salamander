import React from 'react';
import './tew1.css'
import Header from './header.js'

function tew1(){
    return(
        <div id="tew1Container">
            <Header title="Tech Elevator Blog"/>
            <h4>Week: 1</h4>
            <div className="te-image">
            <img src="https://i.imgur.com/VUJ3RrB.jpg" alt="desktop" />
            </div>
            <p></p>
            <div>My name is Zachary, these blog entries will document my progress through Tech Elevator. I'm not really a great writer, not am I the best at conveying ideas as of right now. But I've created some programs during the cohort and I've made them viewable below. I'd really like to incorporate more cool JS into this page, but really blogs are pretty lame. Maybe I'll convert the JAVA programs into JS and leave buttons on here...<br /><br />

Anways, this week I've learned after extensive use of Bash to push, pull, and create/move/remove files. I've always enjoyed not touching a mouse so this has been super useful. The idea that you need to give variables significant names was once more reinforced. My friend who really got me into programming didn't appreciate me naming variables 'sixtyNine' and my lack of indentation which I'm learning to appreciate more now. We also worked on logic and then after that for loops. Finally we moved into eclipse to create and run actual Java programs which I've provided the compiled Java files below. I will admit that I didn't solve some of the math problems myself, but I am proud that I was able to take the formulas online and convert it into working code. I've just learned that running class files doesn't really work that well so I didn't compile the programs and just provided them below. I'm really looking forward to week two!</div>
        </div>
    );
}

export default tew1;