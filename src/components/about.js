import React from 'react'
import './css/about.css'
import side from './media/side.png'
export default function About(){
    return(
<div className="about" id="abt">
<div className="container">
    <center>
   <h4>About</h4>
   </center>
    <br/><br/>
    <div className="container">
    <div className="row">
        <div className="col-sm">
        <h1>VETERAN DRAGONS</h1>
    <br/>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare massa ornare est amet ac. Blandit elit diam tortor dignissim vitae netus est viverra </p>

        </div>
        
        <div className="col-sm">
        <img src={side}/>
        </div>
    </div>
</div>
</div>
</div>

    );
}