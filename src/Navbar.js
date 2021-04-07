import React from 'react';

const Navbar = (props) => {         
        return(
          <div style={styles.nav}>
              <div style={styles.cartIconContainer}>
                  <img style={styles.cartIcon} src="https://www.flaticon.com/svg/vstatic/svg/1170/1170678.svg?token=exp=1617786085~hmac=95416e6f6f43417b87c3f12552739cd0" alt="cart-icon" />
                  <span style={styles.cartCount}>3</span>
              </div>
          </div>  
        );
}

const styles = {
    cartIcon: {
        height: 32,
        marginRight: 20
    },
    nav: {
        height: 70,
        backgroundColor: '#4267b2',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    cartIconContainer: {
        position: 'relative'
    },
    cartCount: {
        backgroundColor: 'yellow',
        borderRadius: '50%',
        position: 'absolute',
        padding: '4px 8px',
        right: 2,
        top: -8
    }
    
}

export default Navbar;