import styled from 'styled-components'

export const ArticleItemWrapper = styled.div`
  padding: 15px 15px 8px 15px;
  margin-bottom: 15px;
  /* border: 1px solid #c5c3c3; */
  /* border: 1px solid #3D2946; */
  background: #250E22;
  color: rgba(255, 255, 255, 0.7);
  .title {
    font-size: 16px;
    font-weight: bold;
    color: #f60;
    /* color: #FFCB77; */
  }
  .tags {
    display: flex;
    align-items: center;
    margin: 7px 0;
    font-size: 12px;
    color: #B25B4F;
    .divider {
      margin: 0 5px;
    }
  }
  .content {
    text-align: justify;
    line-height: 1.7;
    font-size: 13px;
  }
  .more {
    display: flex;
    justify-content: center;
    margin-top: 10px;
    a {
      color: #B25B4F;
      opacity: 0.9;
      cursor: pointer;
      &:hover {
        opacity: 1;
        text-decoration: underline;
      }
    }
  }
`
