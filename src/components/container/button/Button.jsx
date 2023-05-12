import React, { Component } from 'react'

export class Button extends Component {
    state = {
        number: 100
    }

    betteryIncrement = () => {
        if (this.state.number < 100) {
            this.setState({ number: this.state.number + 10 })
        } else if(this.state.number === 100) {
            alert('Charge is Full!')
        }
    }
    
    betteryDecrement = () => {
        if(this.state.number > 0) {
            this.setState({number: this.state.number - 10})
        } else if(this.state.number === 0) {
            alert('Bettery is Low!')
        }
    }
    render() {
        return (
            <div>
                <h1 className='fs-4 fw-bold'> {this.state.number}% </h1>
                <button
                    type='button'
                    className='border p-2 rounded bg-danger text-white me-1'
                    onClick={this.betteryDecrement}
                >
                    Bettery Down
                </button>

                <button
                    className='border p-2 rounded bg-success text-white'
                    onClick={this.betteryIncrement}
                >
                    Bettery Up
                </button>
            </div>
        )
    }
}

export default Button