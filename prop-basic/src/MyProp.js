import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Member {

}

export default class MyProp extends Component{
    render() {
        console.log(this.props);
        return <p> see console log</p>;
    }
}

MyProp.propTypes = {
    prop1:PropTypes.instanceOf(Member),
    prop2:PropTypes.oneOf(['male','female','unknown']),
    prop3:PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool,
    ]),
    prop4:PropTypes.arrayOf(PropTypes.number),
}