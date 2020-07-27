import React,{Component} from "react";

export default class MyCheck extends Component{
    constructor(props) {
        super(props);
        this.state = {
            send:true,
        };
        this.handleChangeCheck = this.handleChangeCheck.bind(this);
        this.show = this.show.bind(this);
    }
    handleChangeCheck(e) {
        this.setState({
            [e.target.name]:e.target.checked
        });
    }
    show() {
        console.log(`send mail:${this.state.send ? 'valid':'invalid'}`);
    }
    render() {
        return (
            <form>
                <label htmlFor="send">send mail?:</label>
                <input id="send" name="send" type="checkbox" checked={this.state.send} onChange={this.handleChangeCheck}/><br/>
                <button type="button" onClick={this.show}>Send</button>
            </form>
            );
    }
}