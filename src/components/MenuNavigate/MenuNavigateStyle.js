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

  .nav-logo a {
    text-decoration: none;
    font-size: 1.2em;
    font-weight: 800;
    color: black;
  }

  .nav-logo:hover {
    border: 1px solid black;
    padding: 0.2em;
    border-radius: 2em;
  }
`;

export default MenuNavigateStyle;
