import React from 'react'
import Header from './header'
import TEW1 from './tew1.js'
import SCalice from './sc-alice.js'
import './home.css'

function Home() {
    return (
        <div>
            <div className="home-title">
            <Header title="My GitPage" />
            </div>
            <div className="tew1">
                <TEW1 />
            </div>
            <div>
                <SCalice />
            </div>
        </div>
    );
}

export default Home