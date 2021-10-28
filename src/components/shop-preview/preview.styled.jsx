import styled, { css } from "styled-components";

const fc = css`
  display: flex;
  flex-direction: column;
`
export const CollectionItem = styled.div`
  ${fc}
  width: 22vw;
  height: 350px;
  align-items: center;
  position: relative;
  margin-bottom: ${({ mb }) => (mb ? mb + "px" : "0px")};
  .custom-button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  }
  &:hover {
    opacity: 0.8;
    .custom-button {
      opacity: 0.85;
      display: flex;
    }
  }
  @media screen and (max-width: 768px) {
    width: 80%;
    margin-bottom: 10px;
  }
`;

export const CollectionImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
    &:hover {
      opacity: 0.8;
    }
`;
export const CollectionFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  & :first-child {
    width: 90%;
    margin-bottom: 15px;
  }

  & :last-child {
    width: 10%;
  }
`;
