import styled from "styled-components";

const PlayerCardStyles = styled.div`
  width: 320px;
  height: 400px;

  .container-image {
    border: 2px dotted red;
    display: flex;
    justify-content: center;

    img {
      width: 100px;
    }
  }
  .container-content {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
  }

  .container-actions {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;

export default PlayerCardStyles;
