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

    handleIncreaseQuantity = (product) => {
        console.log("qty of the product is",product);
        const{products} = this.state;
        const index = products.indexOf(product);
        console.log("increase index",index);
        products[index].qty += 1;

        this.setState({
            products: products
            // products
        })
    }

    handleDecreaseQuantity = (product) => {
        const{products} = this.state;
        const index = products.indexOf(product);
        console.log("decreased product",products[index]);

        if (products[index].qty === 0){
            return;
        }
        products[index].qty -= 1

        this.setState({
            products
        },() => {
            console.log("qty of the product:",product);
        })
    }
    handleDeleteProduct = (id) => {
        const{products} = this.state;
        const items = products.filter((item) => item.id !== id);
        console.log("items",items);

        this.setState({
            products: items
        })
    }
    render(){
        const {products} = this.state;
        return(
            <div className="cart">
                {products.map((product) => {
                    return <CartItem 
                    p={product}
                    key={product.id}
                    onIncreaseQuantity = {this.handleIncreaseQuantity}
                    onDecreaseQuantity = {this.handleDecreaseQuantity}
                    onDeleteProduct = {this.handleDeleteProduct}
                    />
                })}
            </div>
        );
    }
}


export default Cart;