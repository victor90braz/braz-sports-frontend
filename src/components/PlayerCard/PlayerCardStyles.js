import styled from "styled-components";

const PlayerCardStyles = styled.div`
  background: #23ec55;
  background: -webkit-radial-gradient(top right, #23ec55, #2d51c1);
  background: -moz-radial-gradient(top right, #23ec55, #2d51c1);
  background: radial-gradient(to bottom left, #23ec55, #2d51c1);

  margin: 10px;
  padding: 10px;
  color: white;
  width: 400px;
  border-radius: 20px;

  .wrapper > * {
    text-transform: uppercase;
  }

  .card-title {
    font-size: 1.3rem;
    margin-bottom: 10px;
  }

  .card-meta {
    font-size: medium;
  }

  .wrapper:hover {
    cursor: pointer;
    border: 1px solid;
    border-radius: 2em;
  }

  .card-body,
  .media,
  .media-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
  }

  .card-body {
    .location-container {
      display: flex;
      gap: 10px;
    }
  }

  .card-perfil {
    .media {
      .rounded-circle {
        width: 160px;
        height: 160px;
        object-fit: fill;
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
`;

export default PlayerCardStyles;
