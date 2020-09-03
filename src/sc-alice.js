import React from 'react';
import './tew1.css'

function SCalice() {
    return (
        <div id="tew1Container">
            <h2>Alice by <a href="https://switchcouture.com/" target="_blank" rel="noopener noreferrer">Swith Couture</a></h2>
            <div className="te-image">
                <img src="https://i.imgur.com/lOFnL19.jpg" alt="acrylic alice keyboard" />
            </div>
            <p></p>
            <div>
                <ul>
                    <li>Parts</li>
                    <ul>
                        <li>PCB: Mechlovin's Adelais RGB</li>
                        <li>case</li>
                        <li>Zealios V2 67g</li>
                        <ul>
                            <li>lubed with Tribosys 3203</li>
                            <li>filmed with TX films: clear</li>
                        </ul>
                        <li>zeal stabilizers</li>
                        <li>EPBT 9009</li>
                        <li>custom USB Mini cable by Zap Cables</li>
                    </ul>
                    <li>Changes</li>
                    <ul>
                        <li>after switching from PK's USB C cable, had to make USB Mini cable</li>
                    </ul>
                    <li>Possible changes</li>
                    <ul>
                        <li>want to fix Mechlovin PCB</li>
                        <li>will swap out PCB for Sneakbox's hotswap PCB to use as switch testing bed</li>
                    </ul>
                    <li>Keymap coming soon...</li>
                </ul>
            </div>
        </div>
    );
}

export default SCalice;