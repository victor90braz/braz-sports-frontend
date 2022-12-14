import styled from "styled-components";

const DetailPlayerStyle = styled.div`
  .card {
    margin: 10px;
    width: -webkit-fill-available;
    height: -webkit-fill-available;
    background-color: #47bcd4;
    width: 40vw;

    .user {
      display: flex;
      margin-top: auto;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      background: #21252961;
      color: black;
      padding: 10px;

      .icon_edit,
      .user-info {
        cursor: pointer;
      }

      .user-info {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
      }

      img {
        border-radius: 50%;
        width: 50px;
        height: 50px;
        margin-right: 10px;
      }
    }

    .card-body {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-content: flex-start;
      align-items: baseline;

      span,
      h4 {
        padding: 5px;
      }

      span,
      a {
        display: flex;
        gap: 15px;

        a {
          color: black;
        }
      }

      .tag {
        background: #cccccc;
        border-radius: 50px;
        font-size: 1em;
        margin: 0;
        color: #fff;
        padding: 6px 10px;

        cursor: pointer;
      }
      .tag-teal {
        background-color: #47bcd4;
      }
    }

    .tag,
    h5,
    span,
    h4 {
      text-transform: uppercase;
    }
  }

  .card-action {
    color: white;
    border: none;
    background: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }

  .icon_delete:hover {
    color: #f01c1c;
    cursor: pointer;
  }

  .icon_edit {
    color: white;
  }

  .icon_edit:hover {
    color: green;
    cursor: pointer;
  }

  #myDIV {
    width: 100%;
    padding: 50px 0;
    text-align: center;
    background-color: lightblue;
    margin-top: 20px;
  }
  .container-actions {
    span {
      display: flex;
      gap: 20px;
    }

    span:hover {
      cursor: pointer;

      .icon-detail-card {
        background-color: #cccccc;
        border-radius: 15px;
        padding: 5px;
      }
      .icon-delete {
        background-color: red;
        border-radius: 15px;
        padding: 5px;
      }
      .icon-card {
        background-color: yellow;
        border-radius: 15px;
        padding: 5px;
      }
    }
  }

  @media (max-width: 600px) {
    .card {
      width: 90vw;
    }
  }
`;

export default DetailPlayerStyle;
