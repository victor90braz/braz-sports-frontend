import styled from "styled-components";

const EditPlayerPerfilStyle = styled.div`
  .container {
    background-color: #ffc107;
    border-radius: 2em;
    margin: 2em;
    padding: 10px;
    width: 60vw;
  }

  form {
    margin-bottom: 20px;
  }

  button {
    font-size: 0.95em;
    padding: 0.8em;
    border-radius: 2em;
    border: none;
    outline: none;
    background-color: black;
    color: white;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.15em;
    margin-top: 0.8em;
  }

  @media (max-width: 600px) {
    .container {
      width: 90vw;
    }
  }
`;

export default EditPlayerPerfilStyle;
