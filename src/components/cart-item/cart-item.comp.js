import React from 'react'
import { CartItemContainer,ItemDetails } from "./cart-item.styled";

const CartItem = ({ item: { imageUrl, price, name, quantity }}) => {
  return (
    <CartItemContainer>
      <img src={imageUrl} alt='item' />
      <ItemDetails>
        <span className='name'>{name}</span>
        <span className='price'>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  )
}

export default CartItem
