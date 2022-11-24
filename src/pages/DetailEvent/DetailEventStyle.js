import styled from "styled-components";

const DetailEventStyle = styled.div`
  .card {
    border: none;
    margin-bottom: 20px;

    .card-img-top {
      height: 20vh;
      object-fit: cover;
    }
    .card-body {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
`;

export default DetailEventStyle;
