import React, { Component } from "react";

export default class MyHelloContent extends Component {
    render() {
        return <div>Hello,{this.props.children}!</div>;
    }
}