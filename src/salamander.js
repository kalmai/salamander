import React from 'react';
import './tew1.css'

function Salamander() {
    return (
        <div id="tew1Container">
            <h2>Salamander by <a href="https://letsgetit.io/" target="_blank" rel="noopener noreferrer">HHHH</a></h2>
            <div className="te-image">
                <img src="https://i.imgur.com/eV5rpwq.jpg" alt="salamander keyboard" />
            </div>
            <p></p>
            <div>
                <ul>
                    <li>Parts</li>
                    <ul>
                        <li>case</li>
                        <li>Trash Pandas</li>
                        <ul>
                            <li>lubed with Tribosys 3203</li>
                            <li>filmed with TX films: white</li>
                        </ul>
                        <li>cherry stabilizers</li>
                        <li>JTK Hyperfuse</li>
                        <li>TX TKL carrying-case</li>
                        <li>CYSM Aritsan Boba milk: Taro</li>
                        <li>Peripheral Installer Customs custom cable</li>
                        <li>MK UltraCorp a87 Plate Foam</li>
                    </ul>
                    <li>Changes</li>
                    <ul>
                        <li>MD HPs were faulty after cleaning/lubing/filming</li>
                        <li>desoldered whole board and bought some trash pandas to swap out the switch housing</li>
                        <li>sold EPBT WoB and bought JTK Hyperfuse</li>
                        <li>Peripheral Installer Custom cable turned out to be soldered differently than ZAP cables so I resoldered the cables</li>
                        <li>Swap out top housing(currently bottom is trash panda and top is MD HP) for the trash panda tops...</li>
                    </ul>
                    <li>Possible changes</li>
                    <ul>
                        <li>will likely swap out JTK Hyperfuse with GMK Taro</li>
                    </ul>
                    <li><a href="./attributes/sala_wkl_v3.json" download="salamander" target="void">Download Keymap</a></li>
                    
                </ul>
            </div>
        </div>
    );
}

export default Salamander;