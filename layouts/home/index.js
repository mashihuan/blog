import React, { memo } from 'react'
import { Row, Col } from 'antd'

import MyBanner from '@/components/banner'
import Sidebar from '@/components/sidebar'
import { HomeLayoutWrapper } from './style'

export default memo(function HomeLayout(props) {
  return (
    <HomeLayoutWrapper>
      <MyBanner/>
      <Row gutter={20}>
        <Col md={17} sm={24} xs={24}>
          {props.children}
        </Col>
        <Col md={7} sm={24} xs={24}>
          <Sidebar/>
        </Col>
      </Row>
    </HomeLayoutWrapper>
  )
})
