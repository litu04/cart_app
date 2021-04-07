import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component{
    constructor(){
        super();
        this.state ={
        products: [
                {
                    title: "Phone",
                    price: "12999",
                    qty: 5,
                    img: '',
                    id: 1
                },
                {
                    title: "Watch",
                    price: "2999",
                    qty: 10,
                    img: '',
                    id: 2
                },
                {
                    title: "Ear-Phone",
                    price: "999",
                    qty: 4,
                    img: '',
                    id: 3
                },
                {
                    title: "Laptop",
                    price: "59,999",
                    qty: 1,
                    img: '',
                    id: 4
                }
            ]
        }
    }
    render(){
        const {products} = this.state;
        return(
            <div className="cart">
                {products.map((product) => {
                    return <CartItem 
                    p={product}
                    key={product.id}
                    />
                })}
            </div>
        );
    }
}


export default Cart;