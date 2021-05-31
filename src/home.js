import React from 'react'
import Header from './header'
import TEW1 from './tew1.js'
import './home.css'
import TEW2 from './tew2.js'
import TEW3 from './tew3.js'
import TEW4 from './tew4.js'
import TEW5 from './tew5.js'
import TEW6 from './tew6.js'
import Doppio from './doppio.js'
import Salamander from './salamander.js'
import SCalice from './sc-alice.js'
import Fallacy from './fallacy.js'

function Home() {
    const component_arr = [<TEW2 />, <TEW3/>, <TEW4/>, <TEW5/>, <TEW6/>, <Doppio/>, <Salamander/>, <SCalice/>, <Fallacy/>]

    return (
        <div>
            <div className="home-title">
            <Header title="My GitPage" />
            </div>
            <div className="tew1">
                <TEW1 />
            </div>
            <div>
	    {component_arr[Math.floor(Math.random() * component_arr.length)]}
            </div>
        </div>
    );
}

export default Home
