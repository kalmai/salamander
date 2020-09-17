import React from 'react';
import './tew1.css'
import Header from './header.js'

function tew2(){
    return(
        <div id="tew1Container">
            <Header title="Tech Elevator Blog"/>
            <h3>Week: 2</h3>
            <div className="te-image">
            <img src="https://i.imgur.com/VUJ3RrB.jpg" alt="desktop" />
            </div>
            <p></p>
            <div>
            For week two at Tech Elevator we continued to learn about ways to deal with data including Set, Map, and List. I really enjoyed learning these methods since it allows us to process so much data in a sometimes more efficient way. In regards to efficiency, I asked our instructor why we wouldn't just use Set/Map/List all the time instead of arrays and if I'm remembering correctly it has something to do with the way that Java compiles and arrays eat up less memory. Anyways, after I guess we finished learning a few more methods (substring is the answer to everything), we moved on to some more difficult concepts that I am still struggling with. To be honest, last week there were somethings I didn't fully grasp immediately so I imagine having more time to play with classes, getters, and setters everyday will help a lot. Either way, I'm really looking forward to bolstering my knowledge of classes and of course whatever else is in store for next week.
            </div>
        </div>
    );
}

export default tew2;
