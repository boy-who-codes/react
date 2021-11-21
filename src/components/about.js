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
    <p>3,333 Genesis Dragons will be brought into the Metaverse. Each Genesis Dragon will produce 5 $RUNES per day just for holding no staking needed. 700 $RUNES can be used to breed 4,444 cute but fierce baby dragons. Baby dragons will have all the same benefits as Genesis Dragons except they will not produce $RUNES. 
</p>

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