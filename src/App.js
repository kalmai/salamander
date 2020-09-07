import React, { useState } from 'react';
import './App.css';
import NavBar from './nav-bar.js'
import Home from './home.js'
import Footer from './footer.js'
import Icons from './social-icons.js'
import MobileNav from './mobile-nav.js'


function App() {

  const [curContent, setContent] = useState(<Home />);

  return (
    <>
      <div className="mobile-nav">
        <MobileNav mPage={setContent} />
      </div>
      <div className="content">
        <div className="row">
          <div className="nav-column">
            <NavBar page={setContent} />
          </div>
          <div className="content-column">
            {curContent}
          </div>
          <div className="gutter">
            <Icons />
          </div>
        </div>
        <div className="row">
          <Footer />
        </div>
      </div>

    </>
  );

}

export default App;