import React from 'react'
import './css/footer.css'
import logo from './media/logo.png'
export default function Footer (){
    return(
    <div className="footer">
        <div className="main__content">
           <div class="container">
                <div class="row">
                    <div class="col">
                    <br/><br/><br/>
                    <center>
                     <img src={logo} height={'20px'}/>
</center>
                    </div>
                 
                <div class="col">
                <a href="#"><i className="fab fa-discord"></i></a>
                &nbsp;&nbsp;
                <a href="#"><i className="fab fa-instagram"></i></a>
                <br/><br/>
                     <p>"3,333 Genesis Dragons and 4,444 Baby Dragons trying to find their place in the Metaverse"
</p>
                 </div>
            </div>
            </div>
            <br/><br/>
               <center>
               <hr className="dropdown-divider"/>
             
               <p>&copy; 2021 Veteran Dragons All Rights Reserved</p>
               
               <p> A Caritas Labs project</p>
                </center>
        </div>
    </div>
    );
}