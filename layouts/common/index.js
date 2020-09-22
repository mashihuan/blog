import React, { memo } from 'react'
import { Row, Col } from 'antd'

import Sidebar from '@/components/sidebar'
import { CommonLayoutWrapper } from './style'

export default memo(function CommonLayout(props) {
  return (
    <CommonLayoutWrapper>
      <Row gutter={20}>
        <Col md={16} sm={24} xs={24}>
          {props.children}
        </Col>
        <Col md={8} sm={24} xs={24}>
          <Sidebar/>
        </Col>
      </Row>
    </CommonLayoutWrapper>
  )
})
