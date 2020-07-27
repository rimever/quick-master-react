import React,{ Component} from "react";

export default class MyRadio extends Component{
    constructor(props) {
        super(props);
        this.state = {
            sex:'male',
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
        console.log(`Sex:${this.state.sex}`);
    }
    render() {
        return (
            <form>
                <fieldset>
                    <legend>Sex:</legend>
                    <label htmlFor="sex_male">Male</label>
                    <input id="sex_male" name="sex" type="radio" value="male" checked={this.state.sex === 'male'}
                    onChange={this.handleChange}/><br/>
                    <label htmlFor="sex_female">Female</label>
                    <input id="sex_female" name="sex" type="radio" value="female" checked={this.state.sex === 'female'}
                           onChange={this.handleChange}/><br/>
                    <label htmlFor="sex_unknown">Unknown</label>
                    <input id="sex_unknown" name="sex" type="radio" value="unknown" checked={this.state.sex === 'unknown'}
                           onChange={this.handleChange}/><br/>
                </fieldset>
                <button type="button" onClick={this.show} >Submit</button>
            </form>
        )
    }
}