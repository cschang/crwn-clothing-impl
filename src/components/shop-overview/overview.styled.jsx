import styled  from "styled-components";


export const Preview = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;
export const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
  max-width: 125px;
`;
