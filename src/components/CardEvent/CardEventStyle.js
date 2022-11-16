import styled from "styled-components";

const CardEventStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 10px;
  margin: 10px;

  .card {
    border: 1px solid black;

    width: 80vw;
  }

  img {
    width: 100px;
    object-fit: contain;
  }
`;

export default CardEventStyle;
