import styled from 'styled-components'

export const LinksWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 15px 15px 5px 15px;
  border: 1px solid #F88B40;
  background: linear-gradient(to bottom right, #B94131, #1E0B1C);
  .link-item {
    display: flex;
    align-items: center;
    margin-right: 15px;
    margin-bottom: 15px;
    padding: 15px;
    text-align: center;
    cursor: pointer;
    .sort {
      width: 40px;
      height: 40px;
      margin-right: 5px;
      border-radius: 50%;
      background: linear-gradient(to bottom right, #FFFEAA, #C39B3E);
      color: #000;
      text-align: center;
      line-height: 40px;
      font-size: 15px;
      font-weight: bold;
    }
    .name {
      max-width: 200px;
      margin-bottom: 7px;
      color: #fff;
      font-weight: bold;
      font-size: 15px;
    }
    .site {
      max-width: 200px;
      color: #b25b4f;
      font-weight: bold;
    }
  }
`
