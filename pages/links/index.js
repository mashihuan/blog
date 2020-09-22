import React, { memo } from 'react'

import { Breadcrumb } from 'antd'
import CommonLayout from '@/layouts/common'
import { LinksWrapper } from '@/style/links'

export default memo(function Links(props) {
  return (
    <CommonLayout>
      <Breadcrumb>
        <Breadcrumb.Item href="/">首页</Breadcrumb.Item>
        <Breadcrumb.Item>友链</Breadcrumb.Item>
      </Breadcrumb>
      <LinksWrapper>
        <li className="link-item">
          <div className="sort">01</div>
          <div className="info">
            <p className="name">奥利给</p>
            <p className="site">baidu.com</p>
          </div>
        </li>
        <li className="link-item">
          <div className="sort">02</div>
          <div className="info">
            <p className="name">奥利给</p>
            <p className="site">baidu.com</p>
          </div>
        </li>
      </LinksWrapper>
    </CommonLayout>
  )
})
