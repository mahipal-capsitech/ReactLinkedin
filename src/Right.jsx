import React from "react";
import Fst from './images/account/1.jpg';
import Sec from './images/account/2.jpg';
import thi from './images/account/3.jpg';
import fo from './images/account/4.jpg';
import RightComponet from "./Right_com";
import Right_side_jobs from "./Right_side_jobs";
export default class Right extends React.Component{
    render(){
        return(
           <div className="right_das">
             <div className="head">
                      <a>Similar pages</a>
                  </div>
              <RightComponet img={Fst} heada="Online Account Filling"
              subhead="Accounting" lasthead="London,England" />
               <RightComponet img={Sec} heada="Capium Limited"
              subhead="Accounting" lasthead="London, Greater London " />
              
               <RightComponet img={thi} heada="Tech Anand Rathi - ARIT"
              subhead="Information Technology and Services" lasthead="Jodhpur, Rajasthan" />
               
               <RightComponet img={fo} heada="Square Bits "
              subhead="Information Technology and Services" lasthead="Jodhpur, Rajasthan" />
          <div className="btn_setup">
              <button className="btn btn-p">
              Show more similar pages <span><svg  width="20" height="20" fill="currentColor" class="bi bi-chevron-compact-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"/>
</svg></span>
              </button>
          </div>

          <div className="head sec_head">
                      <a>Browse jobs</a>
                  </div>
                  <Right_side_jobs name="User Interface Designer jobs" para="3,939 open jobs" />
                  <Right_side_jobs name="Researcher jobs" para="20.253 open jobs" />
                  <Right_side_jobs name="User Experience Designer jobs" para="4,404 open jobs" />
                  <Right_side_jobs name="User Interface Designer jobs" para="3,939 open jobs" />
                  <Right_side_jobs name="Researcher jobs" para="20.253 open jobs" />
                  <Right_side_jobs name="User Experience Designer jobs" para="4,404 open jobs" />
                  <div className="btn_setup">
              <button className="btn btn-p">
              Show more similar pages <span><svg  width="20" height="20" fill="currentColor" class="bi bi-chevron-compact-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"/>
</svg></span>
              </button>
          </div>

           </div>     
           

        );
    }
}