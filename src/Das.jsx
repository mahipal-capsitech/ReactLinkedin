import React from 'react';
import Das2 from './Das2';
import Right from './Right';
import Logo from './images/cap.jpg';
import P1 from './images/fi.jpg';
import P2 from './images/sec.jpg';
import P3 from './images/thi.jpg';
import Location from './Location';
import Intro from './Intro';
import Update from './Update';
 function Das(){
        return(
            <>
            <div className="Dasboard">
            <div className="left-das">
            <div className="main">
                    <div className="img">
                        <div className="sub-img">
                <img src={Logo} />
                        </div>
                        <div className="dot">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#666666" class="bi bi-three-dots" viewBox="0 0 16 16">
  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
</svg>
                        </div>
                    </div>

                    {/* now start comapny heading and other */}
                    <div className="com">
                        <div className="head">
                            <div class="heading">
                        <a>Capsitech</a>
                            </div>
                            <div class="emp">
                            <div class="img">
                                <img src={P1} />
                            </div>
                            <div class="img">
                                <img src={P2} />
                            </div>
                            <div class="img">
                                <img src={P3} />
                            </div>
                                <a className="tag">
                                    View all 30 employees</a>
                            </div>
                        </div>
                    </div>

                    <div className="com2">
                        <a>Computer Software</a>
                    </div>
                    <div className="com2">
                        <a className="light"> Sidcup, Kent  1,416 followers</a>
                    </div>
                    <div className="com2">
                      <button className="btn btn-s">Follow</button>
                    </div>
                   
                    </div>
                    <div className="about">
                        <Das2 />
                    </div>
                 {/* location */}
                 <Location />
                 {/* intro*/ }
                 <Intro />
                 {/*updates */}
                <Update />
            </div>
<Right />
</div>
         </>
        );
}
export default Das;