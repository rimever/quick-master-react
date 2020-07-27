import React, {Component} from "react";
import PropTypes from 'prop-types';

export default class MyHello extends Component {
    render() {
        return <div>Hello,{this.props.name}!</div>;
    }
}

MyHello.propTypes = {
    name:PropTypes.string.isRequired
};