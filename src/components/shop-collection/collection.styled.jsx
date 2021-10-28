import styled from "styled-components";


export const CollectionPage = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Items = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`;
export const Title = styled.h1`
  font-size: 38px;
  margin: 0 auto 30px;
  width: 100%;
  display: flex;
  justify-content: center;
`;
