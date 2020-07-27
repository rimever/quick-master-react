import React,{Component} from "react";

export default class MySelect extends Component{
    constructor(props) {
        super(props);
        this.state = {
            fruit:'apple',
        };
        this.handleChange = this.handleChange.bind(this);
        this.show = this.show.bind(this);
    }
    handleChange(e) {
        this.setState({
            [e.target.name]:e.target.value
        });
    }
    show() {
        console.log(`liked fruit: ${this.state.fruit}`);
    }
    render() {
        return (
            <form>
                <label htmlFor="fruit">liked fruits:</label>
                <select id="fruit" name="fruit" value={this.state.fruit}
                        onChange={this.handleChange}>
                    <option value="apple">Apple</option>
                    <option value="orange">Orange</option>
                    <option value="melon">Melon</option>
                    <option value="grape">Grape</option>
                    <option value="strawberry">Strawberry</option>
                </select>
                <button type="button" onClick={this.show}>Submit</button>
            </form>
        )
    }
}