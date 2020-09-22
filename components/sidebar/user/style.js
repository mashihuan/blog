import styled from 'styled-components'

export const SidebarUserWrapper = styled.div`
  margin-bottom: 15px;
  border: 1px solid #3D2946;
  background: #1A0D1F;
  color: rgba(255, 255, 255, 0.7);
  .avatar {
    padding: 20px;
    text-align: center;
    border-bottom: 1px dashed #3D2946;
    img {
      width: 110px;
      height: 110px;
      border-radius: 50%;
      object-fit: cover;
    }
  }
  .info {
    padding: 10px 20px;
    p {
      margin: 7px 0;
    }
  }
`
