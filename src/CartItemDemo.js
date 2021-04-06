import React from 'react';

class CartItem extends React.Component{
    constructor(){
        super();
        this.state={
            title: "Sony phone",
            price: "12999",
            qty: 1,
            img: ''
        }
        //this.increaseQuantity = this.increaseQuantity.bind(this);
        this.testing();
    }

    testing () {
        const promise = new Promise((resolve,reject) =>{
            setTimeout(()=>{
                resolve('done');
            },5000);
        })
        promise.then(() => {
            // setState acts like a synchronous call here
            this.setState({
                qty: this.state.qty + 10
            });
            this.setState({
                qty: this.state.qty + 10
            });
            this.setState({
                qty: this.state.qty + 5
            });
            console.log("this",this.state);
        })
    }
    increaseQuantity = () => {
        //this.state.qty += 1;
        //console.log("this.state",this.state);
        // setState form I
        // this.setState({
        //     qty: this.state.qty + 2
        // })
        

        // setstate form II
        //console.log("qty",this.state.qty);
        this.setState((prevState) => {
            return{
                qty: prevState.qty + 1
            }
        },() => {
            console.log("qty",this.state.qty);
        })
        // this.setState((prevState) => {
        //     return{
        //         qty: prevState.qty + 2
        //     }
        // })
        // this.setState((prevState) => {
        //     return{
        //         qty: prevState.qty + 3
        //     }
        // })
    }
    decreaseQuantity = () => {
        const {qty} = this.state;
        if(qty === 0){
            return;
        }
        this.setState((prevState) => {
            return{
                qty: prevState.qty - 1
            }
        })
    }
    render(){
        console.log('rendered');
        const {title,price,qty} = this.state; // destructing the objects
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={{fontSize: 25}}>{title}</div>
                    <div style={{color:"#777"}}>Rs.{price}</div>
                    <div style={{color:"#777"}}>Qty: {qty}</div>
                    <div className="cart-item-action">
                        <img alt="increase"
                        className="action-icons" 
                        src="https://www.flaticon.com/svg/vstatic/svg/1828/1828926.svg?token=exp=1617648438~hmac=aa834a0fa1a14dbe3d68edd0785ab23d" 
                        onClick = {this.increaseQuantity}
                        />

                        <img alt="decrease"
                        className="action-icons"
                        src="https://www.flaticon.com/svg/vstatic/svg/992/992683.svg?token=exp=1617648595~hmac=dcde1090c68dc647d0098783ca73258d" 
                        onClick={this.decreaseQuantity}
                        />
                        <img alt="delete" className="action-icons" src="https://www.flaticon.com/svg/vstatic/svg/3096/3096673.svg?token=exp=1617648658~hmac=ddc6d36bee223efba1f2b88f6716b549" />
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;