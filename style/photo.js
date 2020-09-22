import styled from 'styled-components'

export const KeywordWrapper = styled.div`
  .title {
    span {
      display: inline-block;
      width: 123px;
      height: 29px;
      background: #ff8b3d;
      color: #fff;
      line-height: 29px;
      text-align: center;
    }
  }
  .keys {
    display: flex;
    flex-wrap: wrap;
    padding: 15px 15px 5px 15px;
    border: 1px solid #c5c3c3;
    background: #fff;
    .keys-item {
      margin-right: 15px;
      margin-bottom: 10px;
      cursor: pointer;
    }
  }
`

export const PhotosWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 15px;
  .photo-item {
    margin-right: 15px;
    margin-bottom: 15px;
    img {
      width: 140px;
      height: 140px;
      border-radius: 50%;
      object-fit: cover;
    }
  }
`
