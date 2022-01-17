import React from "react";
import './App.css';
import Logo from './images/logolink.png';
 function Nav(){
    return(
        // <div className="container">
            <div className="nav" >
                <div className="logo">
                    <img src={Logo} />
                </div>
                <div className="comb">
                    <select className="inp sel">
                        <option>Jobs</option>
                        <option>People</option>
                        <option>Learning</option>
                    </select>
                    <input type="text" value="Capsitech" className="inp"/>
                    <input type="text" value="WorldWide" className="inp"/>
                    <div className="svg" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                     </svg>
                    </div>
                  
                </div>
                <div className="btn-set">
                        <button className="btn btn-p">Join now</button>
                        <button className="btn btn-s">Sign in</button>
                    </div>
            </div>
        // </div>
       
    );
}
export default Nav;