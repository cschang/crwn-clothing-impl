import React from 'react'
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { default as CartDropdown} from "../../components/cart/cart-dropdown.container";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  Optionli,
} from "./header.style";

// import { connect } from "react-redux";
// import { createStructuredSelector } from "reselect";
// import { selectCartHidden } from "../../redux/cart/cart.selectors";

import {default as CartIcon} from "../../components/cart-icon/cart-icon.container";
const Header = ({ hidden }) => {
  return (
    <HeaderContainer>
      <LogoContainer id="icon"  to="/">
        <Logo />
      </LogoContainer>
      <OptionsContainer>
        <Optionli to="/shop">SHOP</Optionli>
        {/* <Optionli to="/signin">SIGN IN</Optionli> */}
        <CartIcon />
      </OptionsContainer>
      {hidden ? <CartDropdown /> : null}
    </HeaderContainer>
  );
};

// const mapStateToProps = createStructuredSelector({
//   hidden: selectCartHidden,
// });
// export default connect(mapStateToProps)(Header);
export default Header;
