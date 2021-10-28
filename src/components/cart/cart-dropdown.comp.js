import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import CustomButton from "../button/custom-button.comp";
import CartItem from "../cart-item/cart-item.comp";
import { selectCartItems } from "../../redux/cart/cart.selectors";
// import { toggleCartHidden } from "../../redux/cart/cart.actions.js";

import { CartContainer, EmptyMsg, CartContent } from "./cart-dropdown.styled";

const CartDropdown = ({ cartItems, history, toggleCartHidden }) => {
  // console.log('cartItems :>> ', cartItems);
  return (
    <CartContainer>
      <CartContent>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <EmptyMsg>Your cart is empty</EmptyMsg>
        )}
      </CartContent>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          // dispatch(toggleCartHidden())
          toggleCartHidden();
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </CartContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems 
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
// export default withRouter(CartDropdown);
