import React from 'react'
import Header from './header'
import TEW1 from './tew1.js'
import SCalice from './sc-alice.js'

function Home() {
    return (
        <div>
            <Header title="landing page title" />
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