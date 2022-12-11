import styled from "styled-components";

const LoginFormStyle = styled.div`
  .container {
    position: relative;
    width: 350px;
    border-radius: 20px;
    box-sizing: border-box;
    background: #084298;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  input {
    caret-color: red;
  }

  .brand-logo {
    height: 200px;
    width: 200px;
    margin: auto;
    display: block;
    border-radius: 50%;
    box-sizing: border-box;
  }

  .nav-link {
    text-decoration: "none";
  }
  .register {
    display: flex;
    justify-content: right;
    margin-top: 20px;
    font-size: 1.2rem;
    color: #1da1f2;

    small {
      color: red;
      font-weight: 900;
      margin-left: 10px;
    }
  }

  .inputs {
    text-align: left;
    margin-top: 30px;
  }

  label,
  input,
  button {
    display: block;
    width: 100%;
    padding: 0;
    border: none;
    outline: none;
    box-sizing: border-box;
  }

  label,
  span {
    margin: 8px;
    padding: 10px;
    color: #fff;
  }

  input::placeholder {
    color: gray;
  }

  input {
    background: #ecf0f3;
    padding: 10px;
    padding-left: 20px;
    height: 50px;
    font-size: 14px;
    border-radius: 50px;
    box-shadow: inset 6px 6px 6px #cbced1, inset -6px -6px 6px white;
  }

  button {
    color: white;
    margin-top: 20px;
    background: #1da1f2;
    border-radius: 20px;
    cursor: pointer;
    font-weight: 900;
    transition: 0.5s;
    padding: 20px;
    margin-top: 30px;
  }

  button:hover {
    box-shadow: none;
  }

  h1 {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export default LoginFormStyle;
