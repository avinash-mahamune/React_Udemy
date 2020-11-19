import React, { Component } from 'react';

class Product extends Component{
    render(){
        return(
            <div>
                <h5>Product from [Product.js]</h5>
                <Cart />
            </div>
        );
    }
}

class Cart extends Component{    
    // Call 1st
    constructor(props) {
        console.log('Cart Constructor --1');
        super(props);
        this.state ={qty: 0}
    }

    componentDidMount() {
        console.log('Cart componentDidMount --3 ');
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('Component Update ---4');
        console.log('Props',prevProps);
        console.log('State',prevState);
    }

    render(){
        console.log('Cart Render--2');
        return(
            <div>
                <h5>Cart Item {this.state.qty}</h5>
                <button onClick = {this.updateQty}>Update Qty</button>
            </div>
        );
    }

    updateQty = () => {
        // way 1
            // this.setState((state)=> (            
            //     {qty: state.qty + 1}
            // ))
            
        // Way 2     
            this.setState({
                qty: this.state.qty + 1 
            })
    }

}

export default Product;