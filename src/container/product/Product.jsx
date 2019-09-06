import React, { Component, Fragment } from 'react';
import './Product.css';
import CardProduct from '../cardproduct/CardProduct';
class Product extends Component{
    state = {
        order:0,
        customername: "gemaantikahr"
    }

    HandlerCounterChange = (value) => {
        this.setState({
            order: value
        })
    }
    render(){
        return (
            <Fragment>
                <div>
                    <center><h2>Product Card</h2></center>
                    <center><div className="headernav">
                        <div className="topnav">
                            <a href="#home" class="active">{this.state.order}</a>
                        </div>
                    </div>
                    </center>
                    <CardProduct OnCounterChange={(value)=> this.HandlerCounterChange(value)}/>

                </div>
            </Fragment>
        );
    }
}

export default Product;