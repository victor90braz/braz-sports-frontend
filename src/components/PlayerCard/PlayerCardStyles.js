import styled from "styled-components";

const PlayerCardStyles = styled.div`
  .card {
    width: 600px;
    display: flex;
    flex-direction: row;
    font-size: 1.1em;

    .wrapp-image {
      flex: 0.5;
      .card-img-top {
        object-fit: cover;
        height: 65%;
      }
    }

    .wrapp-image:hover {
      background: red;
    }

    .card-body {
      flex: 2;
      display: flex;
      flex-direction: column;
      align-items: center;

      button:hover {
        background: red;
      }
    }
  }
`;

export default PlayerCardStyles;
