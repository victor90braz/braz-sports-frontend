import styled from "styled-components";

const CardEventStyle = styled.div`
  .card {
    border: 1px solid black;
    width: 95vw;
    display: flex;
    flex-direction: row;

    .card-body_user {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
    }
  }

  img {
    width: 90%;
    object-fit: contain;
  }
`;

export default CardEventStyle;
