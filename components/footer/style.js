import styled from 'styled-components'

export const MyFooterWrapper = styled.footer`
  padding: 40px 0 20px 0;
  border-top: 3px solid #ff000033;
  .inner {
    max-width: 1100px;
    margin: 0 auto;
    text-align: center;
    .link {
      margin: 0 15px;
      &:hover {
        color: #f00;
      }
    }
    .copyright {
      margin-top: 10px;
      color: #f5f3af;
    }
  }
`
