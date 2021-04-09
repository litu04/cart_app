import React from 'react';
import './App.css';
import Cart from './Cart';
import Navbar from './Navbar';
import firebase from 'firebase';

class App extends React.Component {
  constructor(){
    super();
    this.state ={
    products: [],
    loading: true
    
    }
    this.db = firebase.firestore();
}

// componentDidMount(){
//   firebase
//   .firestore()
//   .collection('products')
//   .get()
//   .then((snapshot) => {
//     console.log("snapshot",snapshot);
//     snapshot.docs.map((doc) => {
//       console.log(doc.data());
//     });
//     const prod = snapshot.docs.map((doc) =>{
//       const data = doc.data();
//       data['id'] = doc.id;
//       return data;
//     });
//     this.setState({
//       products:prod,
//       loading: false
//     })
//   })
// }

componentDidMount(){
  firebase
  .firestore()
  .collection('products')
  .onSnapshot((snapshot) => {
    console.log("snapshot",snapshot);
    snapshot.docs.map((doc) => {
      console.log(doc.data());
    });
    const products = snapshot.docs.map((doc) =>{
      const data = doc.data();
      data['id'] = doc.id;
      return data;
    });
    this.setState({
      products:products,
      loading: false
    })
  })
}

// handleIncreaseQuantity = (product) => {
//     console.log("qty of the product is",product);
//     const{products} = this.state;
//     const index = products.indexOf(product);
//     console.log("increase index",index);
//     products[index].qty += 1;

//     this.setState({
//         products: products
//         // products
//     })
// }

handleIncreaseQuantity = (product) => {
  const{products} = this.state;
  const index = products.indexOf(product);
  
  const docRef = this.db.collection('products').doc(products[index].id);
  docRef
  .update({
    qty: products[index].qty + 1
  })
  .then(() => {
    console.log("updated successfully");
  })
  .catch((error) => {
    console.log("error",error);
  })
}

// handleDecreaseQuantity = (product) => {
//     const{products} = this.state;
//     const index = products.indexOf(product);
//     console.log("decreased product",products[index]);

//     if (products[index].qty === 0){
//         return;
//     }
//     products[index].qty -= 1

//     this.setState({
//         products
//     },() => {
//         console.log("qty of the product:",product);
//     })
// }

handleDecreaseQuantity = (product) => {
  const{products} = this.state;
  const index = products.indexOf(product);
  //console.log("decreased product",products[index]);

  if (products[index].qty === 0){
      return;
  }
  const docRef = this.db.collection('products').doc(products[index].id);
  docRef
  .update({
    qty: products[index].qty - 1
  })
  .then(() => {
    console.log("updated successfully");
  })
  .catch((error) => {
    console.log("error",error);
  })
}

// handleDeleteProduct = (id) => {
//     const{products} = this.state;
//     const items = products.filter((item) => item.id !== id);
//     console.log("items",items);

//     this.setState({
//         products: items
//     })
// }

handleDeleteProduct = (id) => {
  const{products} = this.state;
  
  const docRef = this.db.collection('products').doc(id);
  docRef.delete()
  .then(() => {
    console.log("deleted successfully");
  })
  .catch((error) => {
    console.log("error",error);
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

addProduct = () => {
  this.db
  .collection('products')
  .add({
    img: 'https://images-na.ssl-images-amazon.com/images/I/61iE5piq4LL._SL1500_.jpg',
    title: 'Power Bank',
    qty: 6,
    price: 999
  })
  .then((docRef) => {
    console.log("Product added",docRef);
  })
  .catch((error) => {
    console.log("error",error);
  })
}

  render() {
    const {products,loading} = this.state;
    return (
      <div className="App">
        <Navbar count = {this.getCartCount()}/>
        <button onClick={this.addProduct} style={{padding:20, fontSize:20}}>Add a Product</button>
        <Cart 
        products = {products}
        onIncreaseQuantity = {this.handleIncreaseQuantity}
        onDecreaseQuantity = {this.handleDecreaseQuantity}
        onDeleteProduct = {this.handleDeleteProduct}
        />
        {loading && <h1>Loading Products...</h1>}
        <div style={{padding:20,marginLeft:-1300,fontSize:20}}>Total: {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
