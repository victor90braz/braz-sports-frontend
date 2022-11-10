import styled from "styled-components";

const PerfilStyle = styled.div`
  .card {
    width: 80%;
    border-radius: 15px;
    padding: 15px;
    background-color: #00800054;
    position: relative;
    height: 410px;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  .upper {
    height: 100px;
  }

  .upper img {
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    object-fit: cover;
  }

  .user {
    position: relative;
  }

  .profile img {
    height: 80px;
    width: 80px;
    margin-top: 2px;
  }

  .profile {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    height: 90px;
    width: 90px;
    border: 3px solid #fff;

    border-radius: 50%;
  }

  .follow {
    border-radius: 15px;
    padding-left: 20px;
    padding-right: 20px;
    height: 35px;
  }

  .stats span {
    font-size: 29px;
  }
`;

export default PerfilStyle;
