import styled from 'styled-components'

export const MyHeaderWrapper = styled.header`
  .top {
    width: 100%;
    height: 130px;
    background: url('/static/img/header.png') center center no-repeat;
  }
  .nav {
    background: #3E2718;
    border-top: 1px solid #6D452A;
    border-bottom: 1px solid #6D452A;
    .content {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      max-width: 1100px;
      height: 44px;
      margin: 0 auto;
      .logo {
        img {
          height: 40px;
          cursor: pointer;
        }
      }
      .menu {
        display: flex;
        flex-wrap: wrap;
        font-size: 14px;
        .menu-item {
          position: relative;
          margin: 0 3px;
          .iconfont {
            position: absolute;
            top: 0;
            right: 10px;
            color: red;
            font-size: 20px;
            animation: headerFontSize 0.3s infinite alternate;
          }
          .menu-link {
            position: relative;
            display: inline-block;
            width: 100px;
            /* border-top: 2px solid transparent; */
            color: #dbb579;
            text-align: center;
            line-height: 44px;
            cursor: pointer;
          }
          .active, &:hover .menu-link {
            /* border-top-color: #623e26; */
            background: linear-gradient(#402819, #7f5032);
            color: #f00;
          }
          .color {
            animation: headerColorToRed 0.5s infinite alternate;
          }
          .sub-menu {
            display: none;
            position: absolute;
            top: 44px;
            left: 50%;
            width: 100%;
            background: #3E2718;
            transform: translate(-50%);
            z-index: 1000;
            .sub-menu-item {
              .sub-menu-link {
                display: inline-block;
                width: 100%;
                text-align: center;
                line-height: 44px;
                color: #dbb579;
                &:hover {
                  color: #f00;
                }
              }
            }
          }
          &:hover {
            .sub-menu {
              display: block;
            }
          }
        }
      }
      .hamburg {
        display: none;
        flex-direction: column;
        padding-right: 10px;
        cursor: pointer;
        span {
          display: inline-block;
          width: 20px;
          height: 2px;
          margin: 2px 0;
          background: #dbb579;
        }
      }
    }
  }
  @keyframes headerColorToRed {
    from {color: #f00},
    to {color: #dbb579}
  }
  @keyframes headerFontSize {
    from {font-size: 22px},
    to {font-size: 24px}
  }
`
