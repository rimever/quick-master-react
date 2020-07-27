import React,{Component} from "react";

export default class MyForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name:'Yamada Taro',
            email:'tyamada@example.com'
        };
        this.handleChange = this.handleChange.bind(this);
        this.click = this.submit.bind(this);
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    submit() {
        console.log(`name:${this.state.name}`);
        console.log(`email:${this.state.email}`);
    }
    render() {
        return (
            <form>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input id="name" name="name" type="text" onChange={this.handleChange} value={this.state.name}/>
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input id="email" name="email" type="mail" onChange={this.handleChange} value={this.state.email}/>
                </div>
                <div>
                    <button type="button" onClick={this.click}>Send</button>
                </div>
            </form>
        );
    }
}