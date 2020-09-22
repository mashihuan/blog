import styled from 'styled-components'

export const ReactJsWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
  background: url('/static/img/banner1.png');
  background-size: 100% 100%;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  border: 1px solid transparent;
  animation: reactBorder 0.3s infinite alternate;
  .left {
    display: flex;
    align-items: center;
    padding-left: 20px;
    color: #D8AC5A;
    font-style: italic;
    img {
      width: 50px;
      margin-right: 10px;
    }
    .desc {
      display: flex;
      align-items: center;
      .desc-l {
        display: flex;
        align-items: center;
        margin-right: 10px;
        .build {
          display: flex;
          flex-direction: column;
          margin-right: 5px;
        }
      }
      .desc-r {
        padding: 3px 10px;
        border-radius: 20px;
        background: #926909;
        color: #FDFDF1;
      }
    }
  }
  .center {
    display: flex;
    align-items: center;
    margin-left: 75px;
    font-style: italic;
    font-size: 18px;
    span {
      display: inline-block;
      font-weight: bold;
      animation: reactColorToYellow 0.3s infinite alternate;
    }
    span:nth-of-type(2) {
      margin-left: 70px;
    }
    span:nth-of-type(3) {
      margin-left: 75px;
    }
    span:nth-of-type(4) {
      margin-left: 75px;
    }
  }
  .right {
    margin-left: 150px;
    p {
      color: #f00;
      font-size: 22px;
      font-style: italic;
      font-weight: bold;
      animation: reactColorToRed 0.2s infinite alternate;
    }
    p:nth-of-type(2) {
      text-indent: 40px;
    }
  }

  /* 动画 */
  @keyframes reactColorToYellow {
    from {color: #f00},
    to {color: #f00}
  }
  @keyframes reactColorToRed {
    from {color: #000; transform: scale(1.1)},
    to {color: #f00; transform: scale(1.2)}
  }
  @keyframes reactBorder {
    from {border: 1px solid #FFFD00},
    to {border: 1px solid #f00}
  }
`
