import React, {Component} from 'react';
import './../styles/screen.css';

class Screen extends Component {
    render() {
        return (
            <div className="screen"  id="display">
                <div>{this.props.current}</div>
            </div>
        )
    }
}

export default Screen;