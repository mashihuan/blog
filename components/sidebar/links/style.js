import styled from 'styled-components'

export const SidebarLinkTagsWrapper = styled.div`
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
  .links {
    display: flex;
    flex-wrap: wrap;
    padding: 10px 20px 0 20px;
    .link-item {
      margin-right: 10px;
      margin-bottom: 10px;
      padding: 3px 5px;
      border: 1px solid #DA9F19;
      border-radius: 3px;
      color: #DA9F19;
      cursor: pointer;
    }
  }
`
