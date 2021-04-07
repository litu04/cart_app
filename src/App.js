import React from 'react';
import './App.css';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {
  constructor(){
    super();
    this.state ={
    products: [
            {
                title: "Phone",
                price: "14999",
                qty: 1,
                img: '',
                id: 1
            },
            {
                title: "Watch",
                price: "2999",
                qty: 7,
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
              title: "Power Bank",
              price: "999",
              qty: 3,
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

getCartCount = () => {
  const{products} = this.state;
  let count = 0;
  products.forEach((product) => {
    count = count + product.qty;
  })
  return count;
}

getCartTotal = () => {
  const {products} = this.state;
  console.log("this price",products);
  let cartTotal = 0;
  products.map((product) => {
    console.log("qty",product.qty);
    console.log("price",product.price);
    cartTotal = cartTotal + product.qty * product.price;
    console.log("cart Total:",cartTotal);
  })
  return cartTotal;
}

  render() {
    const {products} = this.state;
    return (
      <div className="App">
        <Navbar count = {this.getCartCount()}/>
        <Cart 
        products = {products}
        onIncreaseQuantity = {this.handleIncreaseQuantity}
        onDecreaseQuantity = {this.handleDecreaseQuantity}
        onDeleteProduct = {this.handleDeleteProduct}
        />
        <div>Total: {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
