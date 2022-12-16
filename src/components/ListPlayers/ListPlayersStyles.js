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
  }
`;

export default ListPlayersStyles;
