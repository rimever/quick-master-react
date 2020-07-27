import React,{ Component } from 'react';

export default class MyHello extends Component {
    render() {
        return <div>Hello,{this.props.name}!</div>;
    }
}