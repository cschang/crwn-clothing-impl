import React from 'react'
import { connect } from "react-redux";
import {
  CheckoutItem,
  ImageContainer,
  Item,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from "./checkout-item.styled";
import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cart.actions";

const CheckoutComp = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  // console.log("cartItem: ", cartItem);
  return (
    <CheckoutItem>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <Item>{name}</Item>
      <Quantity>
        <Arrow onClick={() => removeItem(cartItem)}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={() => addItem(cartItem)}>&#10095;</Arrow>
      </Quantity>
      <Item>{price}</Item>
      <RemoveButton onClick={() => clearItem(cartItem)}>&#10005;</RemoveButton>
    </CheckoutItem>
  );
  
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckoutComp);

