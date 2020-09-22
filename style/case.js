import styled from 'styled-components'

export const CaseItemWrapper = styled.div`
  margin-bottom: 15px;
  background: #250E22;
  color: rgba(255, 255, 255, 0.7);
  .top {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100px;
    border-bottom: 1px dotted #4B1A28;
    a {
      margin: 0 5px;
      color: #B25B4F;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .bottom {
    padding: 8px;
    .desc {
      line-height: 1.5;
      min-height: 40px;
    }
    .title {
      margin-top: 5px;
      font-size: 15px;
      font-weight: bold;
      color: #f60;
    }
  }
`
