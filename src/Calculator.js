import React from "react";
import "./index.css";
import NumberDisplay from "./NumberDisplay"
import NumberHelp from "./NumberHelp"
import Buton from "./Buton"
export default class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
            hNumber: [],
            hHelping: [],
            firstNumber: "",
            operator: "",
            helpingWindow: "",
            history: 0
        };
        this.buttons = this.buttons.bind(this)
        this.addHistory = this.addHistory.bind(this)
        this.equal = this.equal.bind(this)
        this.hist = this.hist.bind(this)
    }
    hist()
    {
        if (this.state.history === 0) {
            alert("Brak kolejnych elementów w historii")
        } else {
            var hNumber = this.state.hNumber
            var hHelping = this.state.hHelping
            var hNumberLast = hNumber[hNumber.length - 1]
            var hHelpingLast = hHelping[hHelping.length - 1]
            var history = this.state.history - 1
            hNumber.pop()
            hHelping.pop()
            this.setState({
                number: hNumberLast,
                helpingWindow: hHelpingLast,
                history: history
            })

        }
    }
    addHistory(result, firstNumber, number, operator, hHelping, hNumber, history)
    {
        var t2 = firstNumber + " " + operator + " " + Number(number)
        var t3 = hHelping
        var t4 = result
        var t5 = hNumber
        var t6 = history + 1
        t3.push(t2)
        t5.push(t4)
        this.setState({
            hHelping: t3,
            hNumber: t5,
            history: t6
        })
    }

    equal()
    {
        var t1 = this.state.helpingWindow + " " + this.state.number
        this.setState({
            helpingWindow: t1
        })
        var result = "";
        switch (this.state.operator) {
            case '*':
                result = this.state.firstNumber * Number(this.state.number)
                this.addHistory(result, this.state.firstNumber, this.state.number, "*", this.state.hHelping, this.state.hNumber, this.state.history)
                
                break;
            case '+':
                result = this.state.firstNumber + Number(this.state.number)
                this.addHistory(result, this.state.firstNumber, this.state.number, "+", this.state.hHelping, this.state.hNumber, this.state.history)
                
                break;
            case '-':
                result = this.state.firstNumber - Number(this.state.number)
                this.addHistory(result, this.state.firstNumber, this.state.number, "-", this.state.hHelping, this.state.hNumber, this.state.history)
                
                break;
            case '/':
                if(Number(this.state.number) === 0)
                {
                    alert( "Nie można dzielić przez 0")
                    this.setState({
                        operator: "",
                        firstNumber: '',
                        number: 0,
                        helpingWindow: ''
                    })
                }
                else
                {
                    result = this.state.firstNumber / Number(this.state.number)
                    this.addHistory(result, this.state.firstNumber, this.state.number, "/", this.state.hHelping, this.state.hNumber, this.state.history)
                
                }
                break;
        
            default:
                break;
        }
        this.setState({
            number: result
        })
    }
    buttons(item)
    {
        var clickedButton = item.target.id
        switch (clickedButton) {
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '0':
                var tem1 = this.state.number
                tem1 = tem1 * 10
                tem1 = tem1 + Number(clickedButton)
                this.setState({number: tem1})
                break;
            case '=':
                this.equal(item);
            break;
            case '↤':
                //back
                this.hist()
            break;
            case 'C':
                //Clear
                this.setState({
                    operator: "",
                    firstNumber: '',
                    number: 0,
                    helpingWindow: ''
                })
            break;
            default:
                var tem2 = this.state.number
                var tem3 = this.state.number + " " + clickedButton
                this.setState({
                    operator: clickedButton,
                    firstNumber: tem2,
                    number: "",
                    helpingWindow: tem3
                })
                break;
        }
    }
    render() {
        return(
            <div id="calc">
                <NumberHelp number={this.state.helpingWindow} />
                <NumberDisplay number={this.state.number} />
                <div id="panel">
                    <Buton key="7" item="7" onClick={this.buttons} />
                    <Buton key="8" item="8" onClick={this.buttons} />
                    <Buton key="9" item="9" onClick={this.buttons} />
                    <Buton key="/" item="/" onClick={this.buttons} />
                    <Buton key="4" item="4" onClick={this.buttons} />
                    <Buton key="5" item="5" onClick={this.buttons} />
                    <Buton key="6" item="6" onClick={this.buttons} />
                    <Buton key="*" item="*" onClick={this.buttons} />
                    <Buton key="1" item="1" onClick={this.buttons} />
                    <Buton key="2" item="2" onClick={this.buttons} />
                    <Buton key="3" item="3" onClick={this.buttons} />
                    <Buton key="-" item="-" onClick={this.buttons} />
                    <Buton key="=" item="=" onClick={this.buttons} />
                    <Buton key="0" item="0" onClick={this.buttons} />
                    <Buton key="C" item="C" onClick={this.buttons} />
                    <Buton key="+" item="+" onClick={this.buttons} />
                    <Buton key="↤" item="↤" onClick={this.buttons} />
                </div>
            </div>
        )
    }
}