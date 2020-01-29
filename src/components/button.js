import React, {Component} from 'react'
import './../styles/button.css'

class Button extends Component {
    sendToParent = () => {
        this.props.handleClick(this.props.name)
    }
    render() {
        
        return (
          
        <button  id = {this.props.id} className="btn" onClick={this.sendToParent}> {this.props.name} </button>
   
     
        )
    }
}

export default Button;