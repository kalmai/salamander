import React from 'react';
import './tew1.css'
import Header from './header.js'

function tew6(){
    return(
        <div id="tew1Container">
            <Header title="Tech Elevator Blog"/>
            <h3>Week: 6</h3>
            <div className="te-image">
            <img src="https://i.imgur.com/VUJ3RrB.jpg" alt="desktop" />
            </div>
            <p></p>
            <div>
            For week 6 we learned how to use the database queries that we were writing last week in Java. This was by far the hardest part of the whole database module which ended up being the hardest part of the capstone project. Yeah, I wasn’t expecting the capstone so early. Also that it was going to be content that only spanned two weeks. Well then again, I haven’t really been paying too much attention to the overall schedule since there is so much content, just dealing with problems when they present themselves.<br/><br/>

For the capstone, we wrote another CLI program. I think that’s what we’re going to be doing for the next capstone too. Anyways, for this we just used some sql queries to get data like usual, but in java. My partner and I got the DAO’s and JDBCDAO’s written during the week and started the CLI, but like I predicted, we horribly underestimated how much work the menu to run the CLI would take. We spent maybe nine hours on Sunday hacking it out with only one hour to spare before the deadline. Unfortunately, there is a kinda major bug in it and we didn’t do any of the bonus requirements regrettably. But, I do feel like I was able to learn some of the material better which I’m happy about.


            </div>
        </div>
    );
}

export default tew6;
