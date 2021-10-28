import React from 'react'
import { Mutation } from "react-apollo";
import { gql } from 'apollo-boost'
import CartDropDown from './cart-dropdown.comp'

const TOGGLE_CART_HIDDEN = gql`
  mutation ToggleCartHidden {
    toggleCartHidden @client
  }
`;
// const GET_CART_ITEMS = gql`
//   {
//     cartItems @client
//   }
// `;

const CartDropDownContainer = () => {
  return (
    <Mutation mutation={TOGGLE_CART_HIDDEN}>
      {(toggleCartHidden) => (
            <CartDropDown
              toggleCartHidden={toggleCartHidden}
            />
      )}
    </Mutation>
  );
}

export default CartDropDownContainer
