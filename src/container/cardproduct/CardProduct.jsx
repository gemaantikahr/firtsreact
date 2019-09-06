import React, { Component } from 'react';
class CardProduct extends Component{
    state = {
        order:0,
        customername: "gemaantikahr"
    }

    HandlerCounterChange = (value) => {
        this.props.OnCounterChange(value);
    }

    handlerplus = () =>{
        this.setState({
            order : this.state.order+1,
        }, () =>{
            this.HandlerCounterChange(this.state.order);
        })
    }
    handlerminus = () =>{
        if(this.state.order>0){
            this.setState({
                order : this.state.order-1,
            }, ()=>{
                this.HandlerCounterChange(this.state.order);
            })
        }
    }
    render(){
        return (
                <div>
                    <div className="card">
                        <img className="coveryt" src="http://i3.ytimg.com/vi/mmhUzNAThb4/hqdefault.jpg" alt="Denim Jeans"></img>
                        <h1>{this.state.customername}</h1>
                        <p className="price">$19.99</p>
                        <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
                        <p><button onClick={this.handlerplus}>+</button></p>
                        <input type="text" value={this.state.order}/>
                        <p><button onClick={this.handlerminus}>-</button></p>
                    </div>
                </div>
        );
    }
}

export default CardProduct;