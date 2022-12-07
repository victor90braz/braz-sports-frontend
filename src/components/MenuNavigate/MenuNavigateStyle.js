import styled from "styled-components";

const MenuNavigateStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 30px;
  width: 100%;
  font-size: 1.4em;

  .nav-links {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
  }
`;

export default MenuNavigateStyle;
