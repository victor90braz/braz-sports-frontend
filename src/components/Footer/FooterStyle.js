import styled from "styled-components";

const FooterStyle = styled.div`
  .navbar {
    overflow: hidden;
    background-color: green;
    position: fixed;
    bottom: 0;
    width: 100%;
  }

  .navbar a {
    float: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 0.7em;
  }

  .navbar a:hover {
    background: #ddd;
    color: black;
  }
`;

export default FooterStyle;
