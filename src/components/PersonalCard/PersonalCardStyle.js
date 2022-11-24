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

    img {
      width: 100px;
      height: 100px;
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
