import React, {Component} from "react";

export default class MyList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            fruit:['apple','melon'],
        };
        this.handleChangeList = this.handleChangeList.bind(this);
        this.show = this.show.bind(this);
    }
    handleChangeList(e) {
        const data = [];
        const opts = e.target.options;
        for (let i = 0; i < opts.length; i++) {
            if (opts[i].selected){
                data.push(opts[i].value);
            }
        }
        this.setState({
            [e.target.name]:data
        });
    }
    show() {
        console.log(`liked fruits:${this.state.fruit}`);
    }
    render() {
        return (
            <form>
                <label htmlFor="fruit">liked fruits</label><br/>
                <select id="fruit" name="fruit" value={this.state.fruit}
                        size="5" multiple={true}
                        onChange={this.handleChangeList}>
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