import React from "react";
import "./index.css";
export default class Buton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<div className="button" item={this.props.item} onClick={this.props.onClick} id={this.props.item}>{this.props.item}</div>)
    }
}