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
                            <p>Veteran Dragons are a collection of 3,333 genesis dragons coming to reclaim their place in the Metaverse! We'll also be donating 70% of the mint proceeds as well as 50% of royalties to charity for veterans. 
</p>
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