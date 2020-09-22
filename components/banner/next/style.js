import styled from 'styled-components'

export const NextJsWrapper = styled.div`
  position: relative;
  height: 70px;
  border: 1px solid #fff;
  background: url('/static/img/banner2.png');
  background-size: 100% 100%;
  animation: vueBorder 0.3s infinite alternate;
  .inner {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    padding-left: 20px;
    background-image: radial-gradient(#D7D7D7 1px, transparent 1px), radial-gradient(#d7d7d7 1px, transparent 1px);
    background-position: 0 0, 25px 25px;
    background-size: 50px 50px;
    font-size: 14px;
  }
  .left, .right {
    text-align: center;
    span {
      display: inline-block;
      padding: 3px 40px;
      margin-bottom: 5px;
      margin-right: 40px;
      border-radius: 20px;
      background: #FFDE25;
      font-weight: bold;
      color: #2559A9;
    }
    .top span:nth-of-type(1) {
      animation: vueTranslate 0.3s 0.1s infinite alternate;
    }
    .top span:nth-of-type(2) {
      animation: vueTranslate 0.3s 0.2s infinite alternate;
    }
    .bottom span:nth-of-type(1) {
      animation: vueTranslate 0.3s 0.3s infinite alternate;
    }
    .bottom span:nth-of-type(2) {
      animation: vueTranslate 0.3s 0.4s infinite alternate;
    }
    .color {
      color: #f00;
    }
  }
  .center {
    margin-left: 66px;
    img {
      width: 140px;
    }
  }
  .right {
    margin-left: 66px;
  }

  /* 动画 */
  @keyframes vueTranslate {
    from {transform: translateY(-3px)}
    to {transform: translateY(0)}
  }
  @keyframes vueBorder {
    from {border-color: #fff},
    to {border-color: #f00}
  }
`
