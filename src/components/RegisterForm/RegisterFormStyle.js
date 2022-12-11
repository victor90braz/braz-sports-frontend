import styled from "styled-components";

const RegisterFormStyle = styled.div`
  .container {
    position: relative;
    width: 350px;
    border-radius: 20px;
    box-sizing: border-box;
    background: #b6d973eb;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  input {
    caret-color: red;
  }

  .brand-logo {
    height: 150px;
    width: 150px;
    margin: auto;
    display: block;
    border-radius: 50%;
    box-sizing: border-box;
  }

  .nav-link {
    text-decoration: "none";
  }
  .login {
    display: flex;
    justify-content: right;
    margin-top: 20px;
    font-size: 1.2rem;
    color: #1da1f2;
    padding: 10px;

    small {
      color: red;
      font-weight: 900;
      margin-left: 5px;
    }
  }

  .inputs {
    text-align: left;
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

  label {
    margin: 15px;
  }

  label:nth-of-type(2) {
    margin-top: 12px;
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
    height: 40px;
    border-radius: 20px;
    cursor: pointer;
    font-weight: 900;
    transition: 0.5s;
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

export default RegisterFormStyle;
