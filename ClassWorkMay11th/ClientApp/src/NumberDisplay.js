import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NumberRow from './NumberRow';
class NumberDisplay extends React.Component {
    state = {
        numberArray: [],
        selectedNumber: []
    }
    numberOnClick = () => {
        let number = Math.floor(Math.random() * 1000) + 1;
        const numberArrayCopy = [...this.state.numberArray, number];
        this.setState({ numberArray: numberArrayCopy });
    }
    onSelectClick = number => {
        if (this.state.selectedNumber.includes(number)) {
            const copy = [...this.state.selectedNumber];
            console.log(copy)
            var index = copy.indexOf(number);
            copy.splice(index, 1);
            this.setState({ selectedNumber: [...copy] });
        }
        else {
            const { selectedNumber } = this.state;
            this.setState({ selectedNumber: [...selectedNumber, number] });
        }
    }
    clearAdd = number => {
        if (this.state.selectedNumber.includes(number)) {
            return 'clear';
        }
        else {
            return 'Add';
        }
    }
    render() {
        return (
            <div className="container" style={{ marginTop: 60 }} >
                <button className="btn btn-danger" onClick={this.numberOnClick}>Add a number</button>
                <br />
                <br />
                <table className="table  table-bordered table-hover" >
                    <thead>
                        <tr>
                            <td>Number</td>
                            <td>Add/ Remove</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.numberArray.map((number, i) => <NumberRow clearAdd={() => this.clearAdd(number)} onSelectClick={() => this.onSelectClick(number)} number={number} key={i} />)}
                    </tbody>
                </table>
                <ul>
                    {this.state.selectedNumber.map((number, i) => <li key={i}>{number}</li>)}

                </ul>
            </div>
        )
    }
}
export default NumberDisplay; 