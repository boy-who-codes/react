import React from 'react'
import './css/teams.css'
import a from './media/1.png'
import b from './media/2.png'
import c from './media/3.png'
import d from './media/4.png'
import e from './media/5.png'

export default function Teams(){
    return(
<div className="teams" id="tms">
    <div className="container">
        <center>
            <h4 >Our Team</h4>
        </center>

        <center>
        <div className="slider">
            <div className="container">
                <div className="row">
                <div className="col-sm">
                <img src={a}/><h3>Clayton Griffis 
   </h3><h4>Founder</h4>
                        </div>
                        <div className="col-sm">
                        <img src={b}/>
                        <h3>Laurence Norton 
   </h3><h4>VP of Dragon Ops</h4>
                    </div>
                    <div className="col-sm">
                    <img src={c}/> <h3>Haralan Santana 
   </h3><h4>Artist</h4>
                    </div>
                    <div className="col-sm">
                    <img src={d}/> <h3>Brandon Frulla
   </h3><h4>Lead Developer</h4>
                    </div>
                    <div className="col-sm">
                    <img src={e}/> <h3>Brandon Robb 
   </h3><h4>Air Force Veteran & charity manager</h4>
                    </div>
                </div>
            </div>
       
       
      
        

       </div>
       </center>
    </div>
</div>
    );
}