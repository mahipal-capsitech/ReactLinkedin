import React from "react";
import About_p from './About_p';
export default function Das2(){
return(
    <>
   <div class="head">
       <a>About us</a>
   </div>
   <div className="para">
    <p>Capsitech specialises from planning to execution of IT projects including web 
    applications, cloud applications, software, and eCommerce websites.</p>
    <p>We have successfully managed the number of UK large projects recently and continue 
    providing further development and support services.</p>
    <p>
    We at Capsitech believe in envisaging a well directed vision
    </p>
   </div>
   <div className="data">
   <div class="fst">
   <div className="head">
            <a>Website</a>
            </div>
            <div class="para">
            <a href="http://www.capsitech.com">http://www.capsitech.com
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
  <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
</svg>
            </span></a></div>
       </div>
      <About_p head="Industries" para="Computer Software" />
      <About_p head="Company size" para="51-200 employees" />
      <About_p head="Headquarters" para="Sidcup, Kent" />
      <About_p head="Type" para="Privately Held" />
      <About_p head="Founded" para="2009" />
      <div class="fst fst_set">
   <div className="head head_Set">
            <a>Specialties</a>
            </div>
            <div class="para para_set">
 <p>Web Applications, Cloud Applications, Software development, Website development, 
 Android & iOS Mobile App Development, and Game development</p>           
           </div>
       </div>
      
   </div>
   </>
);
}