import styled from "styled-components";

const PlayerCardStyles = styled.div`
  $color1: #e1c072;
  $color2: #fdeaa7;
  $color3: #725b16;

  $player-image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/214624/Ronaldo.png";
  $country-image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/214624/portugal.png";
  $club-image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/214624/Juventus_Logo.png";

  position: relative;
  width: 100%;
  background: darken($color1, 30%);
  background: radial-gradient(
    ellipse at center,
    darken($color1, 50%) 0%,
    darken($color1, 80%)
  );
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto Condensed", sans-serif;
  bottom: 10px;

  .detail-button {
    border: none;
    background: none;
    margin-bottom: 40px;
  }

  a {
    position: absolute;
    transition: 0.5s all cubic-bezier(0.075, 0.82, 0.165, 1);
    left: -1px;
    right: 0;
    outline: 0;
    margin: 0 auto;
    font-size: 20px;
    text-transform: uppercase;
    width: 268px;
    text-decoration: none;
    padding: 10px 0;
    text-align: center;
    z-index: 2;
    border: 2px solid $color1;
    background: transparent;
    color: darken($color1, 50%);
    font-weight: 700;
    transform: scale(1);
    background: radial-gradient(
      ellipse at center,
      darken($color1, 10%) 0%,
      darken($color1, 20%)
    );
    &:hover {
      margin-top: -5px;
    }
    &.active {
      transform: rotateX(-180deg);
      opacity: 0;
    }
  }

  #card {
    position: relative;
    color: $color3;
    width: 270px;
    height: 430px;
    background: #ddd;
    margin: auto;
    clip-path: url("#svgPath");
    display: block;
    opacity: 0;
    transition: 0.3s all cubic-bezier(0.075, 0.82, 0.165, 1);
    transform: rotateY(-180deg);
    transition-delay: 0.1s;

    #card-inner {
      position: absolute;
      top: 0;
      left: 0;
      background: #ffc107ad;
      height: 100%;
      width: 100%;
      #card-top {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 54%;
        background: $color1;
        overflow: hidden;
        background: linear-gradient(
          135deg,
          $color2 0%,
          darken($color1, 10%) 100%
        );
        .backfont {
          position: absolute;
          bottom: -22px;
          line-height: 1;
          font-size: 118px;
          left: 0;
          letter-spacing: -5px;
          opacity: 0;
          font-weight: 700;
          font-style: italic;
          transition: 1s all cubic-bezier(0.075, 0.82, 0.165, 1) 0.4s;
        }
        .image {
          position: absolute;
          right: 10px;
          bottom: 0;
          z-index: 2;
          height: 75%;
          background-image: url($player-image);
          background-position: bottom center;
          background-repeat: no-repeat;
          background-size: contain;
          opacity: 0;
          transition: 0.5s all ease-out 3s;
          width: 100%;
          display: flex;
          justify-content: flex-end;

          img {
            width: 70%;
            object-fit: revert;
            height: fit-content;
          }
        }
        .info {
          position: absolute;
          left: 0;
          bottom: 0;
          z-index: 3;
          height: 75%;
          width: 30%;
          box-sizing: border-box;
          padding: 0 20px;
          text-align: center;
          text-transform: uppercase;
          div {
            position: relative;
            line-height: 1;
            letter-spacing: -1px;
            font-size: 20px;
            opacity: 0;
            top: 20px;
            transition: 0.5s all cubic-bezier(0.075, 0.82, 0.165, 1) 1s;
            &.value {
              font-size: 40px;
            }
            &.position {
              transition-delay: 1.25s;
            }
            &.country {
              transition-delay: 1.5s;
            }
            &.club {
              transition-delay: 1.75s;
            }
            &.position,
            &.country {
              padding-bottom: 5px;
              font-weight: 700;
              margin-bottom: 5px;
              border-bottom: 2px solid transparentize($color2, 0.1);
            }
            &.country,
            &.club {
              position: relative;
              display: block;
              width: 40px;
              height: 25px;
              margin: 5px auto;
              div {
                position: relative;
                height: 100%;
                width: 100%;
                background-position: center;
                background-size: cover;
                background-image: url($country-image);
              }
              &.club {
                height: 60px;
                div {
                  background-size: contain;
                  background-position: top center;
                  background-repeat: no-repeat;
                  background-image: url($club-image);
                }
              }
            }
          }
        }
      }
      #card-bottom {
        position: absolute;
        overflow: hidden;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 46%;
        background: $color2;
        background: linear-gradient(
          135deg,
          $color2 0%,
          darken($color2, 10%) 100%
        );
        &:before {
          content: "";
          position: absolute;
          left: 0;
          top: -1px;
          width: 100%;
          height: 3px;
          background: lighten($color2, 7%);
        }
        .name {
          text-align: center;
          font-size: 1.5rem;
          text-transform: uppercase;
          font-weight: 700;
          opacity: 0;
          top: -5px;
          position: relative;
          transition: 0.5s all ease-out 3.2s;
          margin: 6px 0;
        }
        .stats {
          position: relative;
          margin: 0 40px;
          padding-top: 10px;
          border-top: 0px solid $color2;
          transition: 0.5s all cubic-bezier(0.075, 0.82, 0.165, 1) 2s;
          &:after {
            content: "";
            position: absolute;
            bottom: -6px;
            left: 0;
            right: 0;
            margin: 0 auto;
            height: 4px;
            width: 0;
            transition: 0.5s all cubic-bezier(0.075, 0.82, 0.165, 1) 2s;
            background: $color2;
          }
          &:before {
            content: "";
            position: absolute;
            bottom: -6px;
            left: 0;
            right: 0;
            margin: 5% auto;
            height: 0%;
            width: 4px;
            transition: 0.5s all cubic-bezier(0.075, 0.82, 0.165, 1) 2s;
            background: $color2;
          }
          div {
            width: 49%;
            vertical-align: top;
            display: inline-block;
            text-transform: uppercase;

            &:last-child {
              ul {
                margin-left: 24px;
              }
            }
          }
          ul {
            list-style: none;
            margin: 0;
            padding: 0;
            li {
              margin: 0;
              position: relative;
              padding: 0;
              display: block;
              margin-bottom: 5px;
              transition: 0.5s all cubic-bezier(0.075, 0.82, 0.165, 1) 2s;
              opacity: 0;
              left: 20px;
              &:nth-child(2) {
                transition-delay: 2.2s;
              }
              &:nth-child(3) {
                transition-delay: 2.4s;
              }
              &:nth-child(4) {
                transition-delay: 2.6s;
              }
              &:nth-child(5) {
                transition-delay: 2.8s;
              }
              &:nth-child(6) {
                transition-delay: 3s;
              }
              span {
                position: relative;
                display: inline-block;

                &:first-child {
                  font-weight: 700;
                  width: 30px;
                  text-align: left;
                }
              }
            }
          }
        }
      }
    }
    &.active {
      display: block;
      cursor: pointer;
      transform: rotate(0deg);
      opacity: 1;
      #card-inner {
        #card-top {
          .image {
            right: 0;
            opacity: 1;
          }
          .backfont {
            opacity: 0.1;
            left: -8px;
          }
          .info div {
            opacity: 1;
            top: 0;
          }
        }
        #card-bottom {
          .stats {
            border-top: 4px solid $color2;
            &:after {
              width: 25%;
            }
            &:before {
              height: 90%;
            }
            ul {
              li {
                opacity: 1;
                left: 0;
              }
            }
          }
          .name {
            opacity: 1;
            top: 0;
          }
        }
      }
    }
  }
`;

export default PlayerCardStyles;
