import React from 'react';

import Button from 'react-bootstrap/Button';
// import ReactDOM from 'react-dom/client';
// import React, { Component } from "react";

class Car extends React.Component {
    // constructor() {
    //     super();
        state = {
            brand: "Ford",
            model: "Mustang",
            color: "red",
            year: 1964
        };
    // }
    changeColor = () => {
        this.setState({ color: "blue" });
    }
    resetColor = () => {
        this.setState({ color: "red" });
    }
    render() {
        return (
            <div>
                <h1>My {this.state.brand}</h1>
                <p style={{ color: this.state.color }}>
                    It is a {this.state.color}
                    {this.state.model}
                    from {this.state.year}.
                </p>
                <button className="btn btn-primary"
                    type="button"
                    onClick={this.changeColor}
                >Change color</button>

                <button style={{ margin: "20px" }} className="btn btn-dark"
                    type="button"
                    onClick={this.resetColor}
                >reset Color</button>
            </div>
        );
    }
}
export default Car;
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car />);