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

  .card-title {
    font-size: 1.3rem;
    margin-bottom: 10px;
  }

  .card-meta {
    font-size: medium;
  }

  .wrapper:hover {
    background: #f01c1c;
    cursor: pointer;
  }

  .location-container > li {
    display: flex;
    gap: 15px;
    margin-bottom: 5px;
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
    gap: 5px;
  }

  .icon_delete:hover {
    font-size: 2rem;
    color: #f01c1c;
    cursor: pointer;
  }

  .icon_edit:hover {
    font-size: 2rem;
    color: #4cda4c;
    cursor: pointer;
  }
`;

export default PlayerCardStyles;
