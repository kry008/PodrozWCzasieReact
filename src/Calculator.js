import React from "react";
import "./index.css";

export default class Kalkulator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <div id="calc">
                <div id="mw">
                    1234567890/*-+
                </div>
                <div id="dw">
                    1234567890/*-+
                </div>
                <div id="panel">
                    <div className="button" id="7">7</div>
                    <div className="button" id="8">8</div>
                    <div className="button" id="9">9</div>
                    <div className="button" id="/">/</div>
                    <div className="button" id="4">4</div>
                    <div className="button" id="5">5</div>
                    <div className="button" id="6">6</div>
                    <div className="button" id="*">*</div>
                    <div className="button" id="1">1</div>
                    <div className="button" id="2">2</div>
                    <div className="button" id="3">3</div>
                    <div className="button" id="-">-</div>
                    <div className="button" id="0">0</div>
                    <div className="button" id="«">«</div>
                    <div className="button" id="=">=</div>
                    <div className="button" id="+">+</div>
                </div>
            </div>
        )
    }
}