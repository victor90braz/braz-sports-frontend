import styled from "styled-components";

const PlayerCardStyles = styled.div`
  background: #23ec55;
  background: -webkit-radial-gradient(top right, #23ec55, #2d51c1);
  background: -moz-radial-gradient(top right, #23ec55, #2d51c1);
  background: radial-gradient(to bottom left, #23ec55, #2d51c1);

  margin: 10px;
  padding: 10px;
  color: white;
  min-width: 400px;
  border-radius: 20px;

  .card-title {
    font-size: x-large;
  }

  .card-body:hover,
  .rounded-circle:hover {
    border: 2px solid black;
    border-radius: 20px;
    cursor: pointer;
  }

  .card-body,
  .media,
  .media-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .card-body {
    padding: 10px;
  }

  .card-perfil {
    .media {
      .rounded-circle {
        width: 160px;
        height: 160px;
        object-fit: fill;
      }

      .rounded-circle:hover {
        opacity: 0.7;
      }
    }

    .media-body {
      .text-white {
        font-size: x-large;
      }
    }

    .media,
    .media-body,
    .rounded-circle {
      margin-bottom: 5px;
    }
  }

  .card-action {
    color: white;
    border: none;
    background: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .card-action_icon:hover {
    margin: 10px;
    font-size: 2rem;
    color: #f01c1c;
    cursor: pointer;
  }
`;

export default PlayerCardStyles;
