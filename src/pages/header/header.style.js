import styled  from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as LogoBag } from "../../assets/shopping-bag.svg";
export const ShoppingCarIcon = styled(LogoBag)`
  width: 24px;
  height: 24px;
`;
export const IconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export const IconNumber = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;
export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;
export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;
export const OptionsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 50%;
`;
export const Optionli = styled(Link)`
  font-size: 1rem;
  margin-right: 1rem;
  @media screen and (max-width: 768px) {
    font-size: 0.75rem;
    margin-right: 0.5rem;
  }
`;
