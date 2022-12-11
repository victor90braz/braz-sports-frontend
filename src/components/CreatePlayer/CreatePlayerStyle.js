import styled from "styled-components";

const CreatePlayerStyle = styled.div`
  background-color: #ffc107;
  border-radius: 2em;
  margin-bottom: 4em;
  margin-top: 4em;

  form {
    display: flex;
    flex-direction: column;
    margin: 10px;

    label {
      display: block;
      margin-bottom: 0.2em;
      font-weight: 600;
    }

    input {
      font-size: 0.95em;
      font-weight: 400;
      padding: 0.4em;
      border: none;
    }

    input:focus {
      border-color: #ffc107;
    }

    input:not(:last-child) {
      margin-bottom: 0.9em;
    }

    button {
      font-size: 0.95em;
      padding: 0.8em 0;
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
  }
`;

export default CreatePlayerStyle;
