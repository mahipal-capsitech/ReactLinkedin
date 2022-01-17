import React from "react";
import Frst from './images/fi.jpg';
export default class Intro_part extends React.Component{
    render(){
        return(
            <>
            <div className="intro">
        <div className="node">
            <div className="img">
        <img src={this.props.img} />
            </div>
            <div className="para">
                <a>{this.props.head}</a>
                <p>{this.props.para}</p>
            </div>
        </div>
        </div>
            </>
        );
    }
}