import React from "react";
import "./index.css";
export default class NumberDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<div id="dw" >{this.props.number}</div>)
    }
}