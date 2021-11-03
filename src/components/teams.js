import React from 'react'
import './css/teams.css'
import a from './media/1.png'
import b from './media/2.png'
import c from './media/3.png'
import d from './media/4.png'

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
                <img src={a}/><h4>Member</h4>
                        </div>
                        <div className="col-sm">
                        <img src={b}/><h4>Member</h4>
                    </div>
                    <div className="col-sm">
                    <img src={c}/><h4>Member</h4>
                    </div>
                    <div className="col-sm">
                    <img src={d}/><h4>Member</h4>
                    </div>
                </div>
            </div>
       
       
      
        

       </div>
       </center>
    </div>
</div>
    );
}