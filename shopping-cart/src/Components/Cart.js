import React from "react";
import CartItem from "./CartItem";
import ScrollBar from "react-custom-scrollbars-2"

class Cart extends React.Component{
  constructor(props){
    super(props);
    this.state={
      isOpend:false,
    }
  }

  close = () => {
    this.setState({isOpend:false});
  };
  open = () => {
    this.setState({isOpend:true});
  };

  render(){
    const {isOpend} = this.state;
    let totalQuantity = this.props.cartItems.reduce((acc, cv) => {
      acc = acc + cv.quantity;
      return acc
    }, 0)

    let totalAmount = this.props.cartItems.reduce((acc,cv) => {
      acc = acc + cv.price * cv.quantity;
      return acc
    }, 0)

    if(!isOpend){
      return(
        <>
          <div onClick={this.open} className="cartopener">
            <figure className="cart-bag">
            <img alt="src" src="/static/bag-icon.png"></img>
            <span>{totalQuantity}</span>
            </figure>
          </div>
        </>
      )
    } else{
      return(
        <div className="p-relative flex-70">
          <aside className="cart p-fixed">
            <div className="close" onClick={this.close}>X</div>
            <div>
              <div className="flex bagcart">
                <figure className="bag">
                  <img alt="src" src="/static/bag-icon.png"></img>
                  <span>{totalQuantity}</span>
                </figure>
                <h2>Cart</h2>
              </div>
              <div className="height">
                <ScrollBar>
                {
                  this.props.cartItems.map((item) => (
                    <CartItem 
                      {...item}
                      incrementQuantity = {this.props.incrementQuantity}
                      decrementQuantity = {this.props.decrementQuantity}
                      deleteItem={this.props.deleteItem}
                    />
                  ))
                }
                </ScrollBar>
              </div>
              <div>
                <div className="flex subtotal">
                  <p>SUBTOTAL</p>
                  <p>$ {totalAmount}</p>
                </div>
                <button className="block" onClick={() => alert(`Total amount is: $${totalAmount}`)}>CHECKOUT</button>
              </div>
            </div>
          </aside>
        </div>
      )
    }
    
  }
}




export default Cart;