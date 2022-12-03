import styled from "styled-components";

const MenuNavigateStyle = styled.div`
  border: 1px solid black;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  .nav-links {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
  }
`;

export default MenuNavigateStyle;
