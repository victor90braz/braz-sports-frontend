import styled from "styled-components";

const MenuHamburgerStyle = styled.div`
  .enlaces {
    background: #0a1e00;
    display: flex;
    flex-direction: column;

    a {
      text-decoration: none;
      text-transform: capitalize;
      font-size: 2rem;
    }

    a:hover {
      background-color: #f9ff00e6;
    }
  }
`;

export default MenuHamburgerStyle;
