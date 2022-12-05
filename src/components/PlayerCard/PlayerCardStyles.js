import styled from "styled-components";

const PlayerCardStyles = styled.div`
  .card {
    width: 600px;
    display: flex;
    flex-direction: row;
    font-size: 1.1em;

    .wrapp-image {
      flex: 0.5;
      border: none1 img {
        border-radius: 50%;
        object-fit: contain;
      }
    }

    .card-body {
      flex: 2;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

export default PlayerCardStyles;
