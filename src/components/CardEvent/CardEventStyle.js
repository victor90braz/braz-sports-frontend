import styled from "styled-components";

const CardEventStyle = styled.div`
  width: 95%;

  .card {
    margin-bottom: 10px;
    border: none;

    .row {
      .userName {
        font-weight: 500;
      }
      .col {
        display: flex;
        flex: 1;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .img-fluid {
          border-radius: 20px;
          padding: 10px;
          width: 100%;
          object-fit: contain;
        }
      }

      .col-description {
        .dateEvent {
          border: 0;
        }

        ul {
          padding: 0;
          list-style: none;
        }

        span {
          text-transform: uppercase;
        }

        h5 {
          font-size: 1rem;
        }

        h5,
        li {
          margin-bottom: 5px;
        }
      }
    }
  }
`;

export default CardEventStyle;
