import styled from 'styled-components'

export const ArticleContentWrapper = styled.article`
  min-height: calc(100% - 15px);
  padding: 20px;
  margin-bottom: 15px;
  background: #250E22;
  * {
    color: rgba(255, 255, 255, 0.7) !important;
  }
  .title {
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    color: #f60 !important;
  }
  .tags {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 0;
    text-align: center;
    font-size: 12px;
    span {
      color: #B25B4F !important;
    }
    .divider {
      margin: 0 5px;
    }
  }
  .content {
    line-height: 1.7;
    pre {
      padding: 7px 10px;
      margin: 5px 0;
      border-radius: 5px;
      background: #1A0517;
      color: #FFD053;
      /* color: #98c379; */
    }
  }
`
