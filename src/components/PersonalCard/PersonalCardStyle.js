import styled from "styled-components";

const PersonalCardStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  .card {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 70%;

    img {
      width: 75px;
      height: 75px;
      border-radius: 50%;
      object-fit: cover;
    }

    ul {
      padding: 0;
      list-style: none;
    }
  }
`;

export default PersonalCardStyle;
