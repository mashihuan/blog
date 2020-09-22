import React, { memo } from 'react'

import { list } from '@/api/case'

import { Row, Col, Breadcrumb } from 'antd'
import CommonLayout from '@/layouts/common'
import { CaseItemWrapper } from '@/style/case'

const Case = memo((props) => {
  // state and props
  const { cases } = props

  return (
    <CommonLayout>
      {/* <Breadcrumb>
        <Breadcrumb.Item href="/">首页</Breadcrumb.Item>
        <Breadcrumb.Item>案例</Breadcrumb.Item>
      </Breadcrumb> */}
      <Row gutter={20}>
        {
          cases.map(item => {
            return (
              <Col md={8} sm={24} xs={24} key={item.id}>
                <CaseItemWrapper>
                  <div className="top">
                    {item.preview && <a href={item.preview} target="_blank">预览</a>}
                    {item.git && <a href={item.git} target="_blank">git</a>}
                  </div>
                  <div className="bottom">
                    <p className="desc ellipsis-2">{item.desc}</p>
                    <h4 className="title ellipsis">{item.name}</h4>
                  </div>
                </CaseItemWrapper>
              </Col>
            )
          })
        }
      </Row>
    </CommonLayout>
  )
})

Case.getInitialProps = async () => {
  const res = await list()
  return {
    cases: res.data.cases
  }
}

export default Case
