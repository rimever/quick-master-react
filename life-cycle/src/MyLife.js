import React,{Component} from "react";

export default class MyLife extends Component{
    constructor(props) {
        super(props);
        this.state = {
            current: new Date(),
        };
    }
    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                current:new Date()
            });
        },1000);
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }
    render() {
        return (
            <div>Now time is {this.state.current.toLocaleString()}</div>
        )
    }
}