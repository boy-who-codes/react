import React from 'react'
import './css/header.css'
import header from './media/header.png'
export default function Header(){
    return(
        <div className="header">
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <div className="text">
                        <br/><br/><br/><br/><br/><br/><br/>
                            <h1>VETERAN <br/> DRAGONS</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare massa ornare est amet ac. Blandit elit diam tortor dignissim vitae netus est viverra.</p>
                            <button className="gs">Get Started</button>
                            </div>
                    </div>

                    <div className="col-sm">
                        <img src={header}/>
                    </div>
                </div>
            </div>
        </div>
    );
}