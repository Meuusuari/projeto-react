import React, { Component } from 'react'
export default class Contador extends Component {

  

    constructor(props) {
        super(props)
        this.state = {
         passo: props.passo,
         valor: 0
        }
    }
    
 inc = () => {
    this.setState({
        valor: this.state.valor + this.state.passo
    })


 }

 dec() {
    this.setState({
        valor: this.state.valor - this.state.passo
    })

 }




    render() {
        return (
            <div>
                <h2>Contador</h2>
                <h4>Passo: {this.state.passo}</h4>

               {/* <input type="number" value={this.state.passo}
                onChange={ e => setState({ passo: +e.target.value })}/>*/}
                <h4>Valor: {this.state.valor}</h4>

                <div>
                    <button onClick={this.inc}>+</button>
                    <button onClick={this.dec}>-</button>
                </div>
            </div>
        )
    }
}