import styled from "styled-components";

const ListPlayersStyles = styled.div`
  .container-players {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 80vw;

    #infoList {
      display: none;
    }

    .container-info {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-items: center;
    }
  }
`;

export default ListPlayersStyles;
