import styled from 'styled-components'

export const SidebarHotArticleWrapper = styled.div`
  margin-bottom: 15px;
  border: 1px solid #3D2946;
  background: #1A0D1F;
  color: rgba(255, 255, 255, 0.7);
  .title {
    padding: 10px 20px;
    border-bottom: 1px dashed #3D2946;
    font-size: 15px;
    font-weight: bold;
    color: #f60;
  }
  .articles {
    padding: 10px 20px 0 20px;
    .article-item {
      margin-bottom: 10px;
      list-style: inside;
      a {
        color: rgba(255, 255, 255, 0.7);
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`
