import React, { Component } from "react";


class ClassExp extends Component {
//=================2=====================
    state = {
      name :"hello from state "
    }
    changestate = () => {
      this.setState({
        name : "we changed the state in child"
      })
    }
    //===============2===============
    render() {
        return (
            <div>
                <h1>{this.props.att}</h1>
                {/* //=====2============ */}
                <p>{this.state.name}</p>
      <button onClick={this.changestate}>change</button>
                {/* //======2========== */}
            </div>
        );
    }
}

export default ClassExp;