import React from "react";
import Frst from './images/fi.jpg';
import Sec from './images/sec.jpg';
import thi from './images/thi.jpg'
import Intro_part from "./Intro_part";
export default function Intro() {
    return(
        <>
          <div className="intro_head ">
            <a>Employees at Capsitech</a>
        </div>
        <Intro_part img={Frst} head="Dave jangid" para="CEO & Founder of FinTech Startups, a change evangelist in the
                 small business ecosystem in the UK by AI & Automation."/>

        <Intro_part img={Sec} head="Sharvan Gehlot" para="Software / Web Developer"/>
        <Intro_part img={thi} head="Mukesh jangid" para="Chief Technical officer"/>
     <button className="btn btn-s" style={{margin:"1.5rem 0 0 1.2rem"}}>See  all employees</button>
       <hr style={{marginTop:"2rem"}}/>
        </>
    )
}