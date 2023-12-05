import React, { Component } from "react";

class CounterClass extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        };
        // this.increase = this.increase.bind(this);
    }

    increase = () => {
        this.setState({ count: this.state.count + 1 });
    }
    decrease = () => {
        this.setState({ count: this.state.count - 1 });
    }

    render() {
        return (
            <div style={{ margin: '50px' }}>
                <h1>Welcome to class increase </h1>
                <h3>Counter App using Class Component : </h3>
                <h2> {this.state.count}</h2>
                <button className="btn btn-primary" onClick={this.increase}> Add</button>
                <button className="btn btn-primary" onClick={this.decrease}> Subtract</button>

            </div>
        );
    }
}

export default CounterClass;
