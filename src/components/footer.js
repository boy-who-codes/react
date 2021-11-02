import React from 'react'
import './css/footer.css'
export default function Footer (){
    return(
    <div className="footer">
        <div className="main__content">
           <div class="container">
                <div class="row">
                    <div class="col">
                     Links
                     <ul>
                     <li>link 1</li>
                     <li>link 1</li>
                     <li>link 1</li>
                     <li>link 1</li>
                     <li>link 1</li>
                     </ul>

                    </div>
                 
                <div class="col">
                     <p><code>[social Icons = instagram/facebook/discord]</code></p>
                     <h5>LOGO</h5>
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