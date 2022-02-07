import React from "react";
import "./index.css";
export default class NumberHelp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<div id="mw" >{this.props.number}</div>)
    }
}