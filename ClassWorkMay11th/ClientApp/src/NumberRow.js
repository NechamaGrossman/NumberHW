import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NumberDisplay from './NumberDisplay'
class NumberRow extends React.Component {

    render() {
        return (
            <tr >
                <td>{this.props.number}</td>
                <td><button onClick={this.props.onSelectClick}>{this.props.clearAdd()}</button></td>
            </tr>
        ) 
    }
}
export default NumberRow; 