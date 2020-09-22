import styled from 'styled-components'

export const VueJsWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
  padding-left: 20px;
  border: 1px solid transparent;
  background: url('/static/img/banner3.png');
  background-size: 100% 100%;
  color: #fff;
  font-size: 20px;
  animation: vueBorder 0.3s 0.1s infinite alternate;
  .left {
    display: flex;
    align-items: center;
    color: #F7E693;
    img {
      width: 48px;
      margin-right: 10px;
    }
  }
  .center {
    margin-left: 130px;
    span:nth-of-type(1) {
      margin-right: 3px;
      font-size: 36px;
      font-weight: bold;
      color: #f00;
      animation: vueColorToRed 0.3s infinite alternate;
    }
    span:nth-of-type(2) {
      font-size: 26px;
      font-weight: bold;
      color: #000;
      animation: vueColorToBlack 0.3s infinite alternate;
    }
  }
  .right {
    margin-left: 140px;
    span {
      display: inline-block;
      margin-right: 40px;
      font-style: italic;
    }
    span:nth-of-type(1) {
      animation: vueScale 0.3s 0.1s infinite alternate;
    }
    span:nth-of-type(2) {
      animation: vueScale 0.3s 0.2s infinite alternate;
    }
    span:nth-of-type(3) {
      animation: vueScale 0.3s 0.3s infinite alternate;
    }
    span:nth-of-type(4) {
      animation: vueScale 0.3s 0.4s infinite alternate;
    }
    span:nth-of-type(5) {
      animation: vueScale 0.3s 0.5s infinite alternate;
    }
    .color {
      color: #FFFF00;
      font-size: 24px;
    }
  }

  @keyframes vueScale {
    from {transform: scale(1.1)},
    to {transform: scale(1.5)}
  }
  @keyframes vueColorToRed {
    from {color: #000},
    to {color: #f00}
  }
  @keyframes vueColorToBlack {
    from {color: #f00},
    to {color: #000}
  }
  @keyframes vueBorder {
    from {border-color: #f00},
    to {border-color: #000}
  }
`
