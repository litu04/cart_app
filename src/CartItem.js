import React from 'react';

const CartItem = (props) =>{
    
        //console.log('rendered');
        const {title,price,qty} = props.p;
        const {p,onIncreaseQuantity,onDecreaseQuantity,onDeleteProduct} = props;
        //console.log("this.props",this.props);
         
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} src={p.img}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize: 25}}>{title}</div>
                    <div style={{color:"#777"}}>Rs.{price}</div>
                    <div style={{color:"#777"}}>Qty: {qty}</div>
                    <div className="cart-item-action">
                        <img alt="increase"
                        className="action-icons" 
                        src="https://www.flaticon.com/svg/vstatic/svg/1828/1828926.svg?token=exp=1617648438~hmac=aa834a0fa1a14dbe3d68edd0785ab23d" 
                        onClick = {() => onIncreaseQuantity(p)}
                        />

                        <img alt="decrease"
                        className="action-icons"
                        src="https://www.flaticon.com/svg/vstatic/svg/992/992683.svg?token=exp=1617648595~hmac=dcde1090c68dc647d0098783ca73258d" 
                        onClick={() => onDecreaseQuantity(p)}
                        />
                        <img alt="delete"
                        className="action-icons"
                        src="https://www.flaticon.com/svg/vstatic/svg/3096/3096673.svg?token=exp=1617648658~hmac=ddc6d36bee223efba1f2b88f6716b549"
                        onClick={() => onDeleteProduct(p.id)}
                        />
                    </div>
                </div>
            </div>
        );
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