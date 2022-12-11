import styled from "styled-components";

const DetailPlayerStyle = styled.div`
  .card {
    margin: 10px;
    width: -webkit-fill-available;
    height: -webkit-fill-available;
    background-color: #47bcd4;

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
      align-content: center;
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
`;

export default DetailPlayerStyle;
