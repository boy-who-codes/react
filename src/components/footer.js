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
                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled </p>
                 </div>
            </div>
            </div>
            <br/><br/>
               <center>
               <hr className="dropdown-divider"/>
             
                   <p>&copy; 2021 Veteran dragon</p>
                </center>
        </div>
    </div>
    );
}