import styled from "styled-components";

const PerfilStyle = styled.div`
  .container-perfil {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 10px;
    margin-top: 20px;
  }

  .container-perfil > * {
    text-transform: uppercase;
  }

  .card {
    background-color: #d4dbe538;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.7);
    margin-bottom: 30px;
  }

  .card_name {
    margin-top: 15px;
    font-size: 1.2em;
  }

  .card_image {
    height: 260px;
    width: 260px;
    border-radius: 50%;
    border: 5px solid #272133;
    margin-top: 20px;
  }

  .draw-border {
    box-shadow: inset 0 0 0 4px #58cdd1;
    color: #58afd1;
    -webkit-transition: color 0.25s 0.0833333333s;
    transition: color 0.25s 0.0833333333s;
    position: relative;
  }

  .draw-border::before,
  .draw-border::after {
    border: 0 solid transparent;
    box-sizing: border-box;
    content: "";
    pointer-events: none;
    position: absolute;
    width: 0rem;
    height: 0;
    bottom: 0;
    right: 0;
  }

  .draw-border::before {
    border-bottom-width: 4px;
    border-left-width: 4px;
  }

  .draw-border::after {
    border-top-width: 4px;
    border-right-width: 4px;
  }

  .draw-border:hover {
    color: #ffe593;
  }

  .draw-border:hover::before,
  .draw-border:hover::after {
    border-color: #eb196e;
    -webkit-transition: border-color 0s, width 0.25s, height 0.25s;
    transition: border-color 0s, width 0.25s, height 0.25s;
    width: 100%;
    height: 100%;
  }

  .draw-border:hover::before {
    -webkit-transition-delay: 0s, 0s, 0.25s;
    transition-delay: 0s, 0s, 0.25s;
  }

  .draw-border:hover::after {
    -webkit-transition-delay: 0s, 0.25s, 0s;
    transition-delay: 0s, 0.25s, 0s;
  }

  .btn {
    background: none;
    border: none;
    cursor: pointer;
    line-height: 1.5;
    font: 1.2rem;
    font-weight: 700;
    padding: 0.75em 2em;
    letter-spacing: 0.05rem;
    margin: 1em;
  }

  .btn:focus {
    outline: 2px dotted #55d7dc;
  }

  .card-body {
    display: flex;
    flex-direction: column;
    align-content: flex-end;
    align-items: center;
  }

  .card-footer {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
  }
`;

export default PerfilStyle;
