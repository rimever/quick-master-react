import React,{Component} from "react";

export default class MyCheckMulti extends Component{
    constructor(props) {
        super(props);
        this.state = {
            fruit:['apple','melon'],
        };
        this.handleChangeMulti = this.handleChangeMulti.bind(this);
        this.show = this.show.bind(this);
    }
    handleChangeMulti(e) {
        const fs = this.state.fruit;
        if (e.target.checked) {
            fs.push(e.target.value);
        }else {
            fs.splice(fs.indexOf(e.target.value),1);
        }
        this.setState({
            [e.target.name]:fs
        });
    }
    show() {
        console.log(`liked fruis: ${this.state.fruit}`);
    }
    render() {
        return (
            <form>
                <fieldset>
                    <legend>liked fruit:</legend>
                    <label htmlFor="fruit_apple">Apple</label>
                    <input id="fruit_apple" name="fruit" type="checkbox" value="apple"
                    checked={this.state.fruit.includes('apple')} onChange={this.handleChangeMulti}/><br/>
                    <label htmlFor="fruit_orange">Orange</label>
                    <input id="fruit_orange" name="fruit" type="checkbox" value="orange"
                           checked={this.state.fruit.includes('orange')} onChange={this.handleChangeMulti}/><br/>
                    <label htmlFor="fruit_melon">Melon</label>
                    <input id="fruit_melon" name="fruit" type="checkbox" value="melon"
                           checked={this.state.fruit.includes('melon')} onChange={this.handleChangeMulti}/><br/>
                    <label htmlFor="fruit_grape">Grape</label>
                    <input id="fruit_grape" name="fruit" type="checkbox" value="grape"
                           checked={this.state.fruit.includes('grape')} onChange={this.handleChangeMulti}/><br/>
                    <label htmlFor="fruit_strawberry">Strawberry</label>
                    <input id="fruit_strawberry" name="fruit" type="checkbox" value="strawberry"
                           checked={this.state.fruit.includes('strawberry')} onChange={this.handleChangeMulti}/><br/>
                </fieldset>
                <button type="button" onClick={this.show} >Send</button>
            </form>
        )
    }
}