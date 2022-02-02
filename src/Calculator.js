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

                </div>
                <div id="dw">
                    1234567890/*-+
                </div>
                <div id="panel">
                    <div className="button">7</div>
                    <div className="button">8</div>
                    <div className="button">9</div>
                    <div className="button">/</div>
                    <div className="button">4</div>
                    <div className="button">5</div>
                    <div className="button">6</div>
                    <div className="button">*</div>
                    <div className="button">1</div>
                    <div className="button">2</div>
                    <div className="button">3</div>
                    <div className="button">-</div>
                    <div className="button">0</div>
                    <div className="button">«</div>
                    <div className="button">=</div>
                    <div className="button">+</div>
                </div>
            </div>
        )
    }
}