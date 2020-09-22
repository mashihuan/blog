import React, { memo } from 'react'

import { Breadcrumb } from 'antd'
import CommonLayout from '@/layouts/common'
import { KeywordWrapper, PhotosWrapper } from '@/style/photo'

export default memo(function Photo(props) {
  return (
    <CommonLayout>
      <Breadcrumb>
        <Breadcrumb.Item href="/">首页</Breadcrumb.Item>
        <Breadcrumb.Item>相册</Breadcrumb.Item>
      </Breadcrumb>
      <KeywordWrapper>
        <h4 className="title"><span>关键字</span></h4>
        <ul className="keys">
          <li className="keys-item">全部</li>
          <li className="keys-item">吃屎</li>
          <li className="keys-item">学到秃顶</li>
          <li className="keys-item">奥利给</li>
        </ul>
      </KeywordWrapper>
      <PhotosWrapper>
        <li className="photo-item">
          <img src="/static/img/avatar.png" alt=""/>
        </li>
        <li className="photo-item">
          <img src="/static/img/avatar.png" alt=""/>
        </li>
        <li className="photo-item">
          <img src="/static/img/avatar.png" alt=""/>
        </li>
        <li className="photo-item">
          <img src="/static/img/avatar.png" alt=""/>
        </li>
        <li className="photo-item">
          <img src="/static/img/avatar.png" alt=""/>
        </li>
      </PhotosWrapper>
      <p className="change" style={{textAlign:'center',color:'#fff'}}>
        <span style={{cursor: 'pointer',color:'#ff8b3d'}}>换一批</span>
      </p>
    </CommonLayout>
  )
})

