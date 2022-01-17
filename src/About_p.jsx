import React from "react";
import react from "react";

export default class About_p extends React.Component{
    
    render(){
        return(
            <div class="fst">
            <div class="head"><a>{this.props.head}</a></div>
            <div class="para"><p>{this.props.para}</p></div>
       </div>
        );
    }
}