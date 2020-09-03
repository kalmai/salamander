import React from 'react';
import './tew1.css'
import Header from './header.js'

function Doppio() {
    return (
        <div id="tew1Container">
            <Header title="Mechanical Keyboards" />
            <h3>Doppio 80 by <a href="https://play-keyboard.store/" target="_blank" rel="noopener noreferrer">Play Keyboards</a></h3>
            <div className="te-image">
                <img src="https://cdn.discordapp.com/attachments/186505434146930688/593584139391729696/JPEG_20190626_193109.jpg" alt="doppio keyboard" />
            </div>
            <p></p>
            <div>
                <ul>
                    <li>Parts</li>
                    <ul>
                        <li>case/pcb</li>
                        <li>Novel Keys Box Royals</li>
                        <li>Stabilizers</li>
                        <li>EPBT 9009</li>
                    </ul>
                    <li>Changes</li>
                    <ul>
                        <li>swapped out the poly carb bottom and swapped it for the alu one which created a much louder sound...</li>
                    </ul>
                    <li>Possible changes</li>
                    <ul>
                        <li>if used again before selling it, will likely swap out the alu bottom plate for pc</li>
                        <li>will sell on r/mm in the future</li>
                    </ul>
                    <li><a href="./attributes/Doppio80.json" download="doppio80" target="void">Download Keymap</a></li>
                    
                </ul>
            </div>
        </div>
    );
}

export default Doppio;