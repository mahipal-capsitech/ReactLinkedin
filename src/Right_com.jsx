import React from "react";

export default class RightComponet extends React.Component{
    render(){
        return(
            <>
            <div className="fst">
                  <div class="set_up">
                      <div className="img">
                            <img src={this.props.img} />
                      </div>
                      <div class="para">
                          <a>{this.props.heada}</a>
                          <a>{this.props.subhead}</a>
                          <a>{this.props.lasthead}</a>
                      </div>
                  </div>
              </div>
            </>
        )
    }
}