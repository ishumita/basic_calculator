import React, {Component} from 'react';
import './../styles/screen.css';

class Screen extends Component {
    render() {
        return (
            <div className="screen">
                <div>{this.props.current}</div>
                <div>{this.props.result}</div>
            </div>
        )
    }
}

export default Screen;