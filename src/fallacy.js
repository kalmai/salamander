import React from 'react';
import './tew1.css'
import Header from './header.js';

function Fallacy() {
    return (
        <div id="tew1Container">
            <Header title="Mechanical Keyboards" />
            <h3>Fallacy by <a href="https://discord.gg/GsPPv4" target="_blank" rel="noopener noreferrer">ES Keyboards</a></h3>
            <div className="te-image">
                <img src="https://i.imgur.com/S7ZUfx8.jpg?1" alt="fallacy keyboard" />
            </div>
            <p></p>
            <div>
                <ul>
                    <li>Parts</li>
                    <ul>
                        <li>PCB</li>
                        <li>case</li>
                        <li>Pk's Lilac's</li>
                        <ul>
                            <li>will lube with Tribosys 3203</li>
                            <li>will film with TX films: clear</li>
                        </ul>
                        <li>zeal stabilizers or C3 stabilizers</li>
                        <li>GMK MODO-Light</li>
                    </ul>
                    <li>Possible changes</li>
                    <ul>
                        <li>bought a few switches to test, may use Blueberries or Gazzew Boba U4 swithces instead</li>
                    </ul>
                    <li>Keymap coming soon...</li>
                </ul>
            </div>
        </div>
    );
}

export default Fallacy;