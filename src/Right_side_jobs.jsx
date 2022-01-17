import React from "react";

export default function Right_side_jobs(props){
    return(
        <>
        <div className="jobs">
        <a>{props.name}</a>
        <p>{props.para}</p>
        </div>
        </>
    );
}