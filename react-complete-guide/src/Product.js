import React, { Component } from 'react';
// import { ThemeConsumer } from 'styled-components';

class Product extends Component{
    constructor(props){
        super(props);
        this.state = {
            productId: '',
            qty: 0
        }
    }


    // addToCart = (pid) => (
    //     this.setState((state) =>(
    //         {productId:pid, qty: state.qty + 1}
    //     ))
    // )

    addToCart = (pid) => {
        console.log('new Pid',pid);

        this.setState({
           qty: this.state.qty +1 
        })
    }


    render(){
        return(
            <div>
                <h5>Product from [Product.js]</h5>
                 <button onClick={() => this.addToCart(1)}>Add To Cart 1</button>
                 <button onClick={() => this.addToCart(2)}>Add To Cart 2</button>
                 <button onClick={() => this.addToCart(3)}>Add To Cart 3</button>
                <Cart productId = {this.state.productId} qty = {this.state.qty} />
            </div>
        );
    }
}

class Cart extends Component{    
    // Call 1st
    constructor(props) {
        console.log('Cart Constructor --1');
        super(props);
        this.state ={qty: this.props.qty}
    }

    componentDidMount() {
        console.log('Cart componentDidMount --3 ');
    }
    componentDidUpdate(prevProps, prevState) {
        if(this.props.productId !== prevProps.productId){
            console.log('Component Update ---4');    
        }
        
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

    static getDerivedStateFromProps(props, state){
        console.log('getDerivedStateFromProps',props,state);

        if(props.qty !== state.qty){
            console.log('yes');
            return {qty: props.qty  }
            // return{state.qty: props.qty}
        }        
          return null;
    }

    shouldComponentUpdate(nextProps, nextState){
        if(this.props.qty !== nextProps.qty) {
            console.log('shouldComponentUpdate');
            return true;
        }
        return false;
    }

    // updateQty = () => {
    //     // way 1
    //         // this.setState((state)=> (            
    //         //     {qty: state.qty + 1}
    //         // ))
            
    //     // Way 2     
    //         // this.setState({
    //         //     qty: this.state.qty + 1 
    //         // })
    // }

}

export default Product;