import styled from "styled-components";

const MenuHamburgerStyle = styled.div`
  .enlaces {
    background: rgb(10, 25, 41);
    display: flex;
    flex-direction: column;

    a {
      text-decoration: none;
      text-transform: capitalize;
      font-size: 2rem;
      font-weight: 400;
    }

    a:hover {
      background-color: #fff;
    }
  }
`;

export default MenuHamburgerStyle;
