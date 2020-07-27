import React, {Component} from "react";

export  default class MyEvent extends Component{
    show(e) {
        console.log(`${this.props.greet},${e.target.value}!!`);
    }
    render() {
        return (
            <form>
                <label htmlFor="txtName">Name:</label>
                <input id="txtName" type="text" onChange={this.show.bind(this)}/>
            </form>
        );
    }

}