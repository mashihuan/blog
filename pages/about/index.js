import React, { memo } from 'react'

import { Breadcrumb } from 'antd'
import CommonLayout from '@/layouts/common'
import { AboutWrapper } from '@/style/about'

export default memo(function About(props) {
  return (
    <CommonLayout>
      {/* <Breadcrumb>
        <Breadcrumb.Item href="/">首页</Breadcrumb.Item>
        <Breadcrumb.Item>关于我</Breadcrumb.Item>
      </Breadcrumb> */}
      <AboutWrapper>
        <h4>姓名</h4>
        <ul>
          <li>马世环</li>
        </ul>
        <h4>联系</h4>
        <ul>
          <li>QQ：1067615605</li>
          <li>邮箱：1067615605@qq.com</li>
        </ul>
        <h4>职业</h4>
        <ul>
          <li>2016年化学工程本科毕业</li>
          <li>毕业后，顺其自然地进入化工行业</li>
          <li>拒绝安逸、决心改变，17年初开始购买书籍利用业余时间自学前端知识</li>
          <li>半年后，辞掉化工厂的工作，入职一家互联网公司，正式成为一名前端工程师</li>
        </ul>
        <h4>业余</h4>
        <ul>
          <li>健身-感觉自己是个橡皮人，可以在130-160斤自由切换</li>
          <li>蹦迪-在国外叫muzz</li>
        </ul>
        <h4>本站</h4>
        <ul>
          <li>风格-灵感来源于某大学招生宣传广告</li>
          <li>本站从前端都后端完全自主开发</li>
          <li>客户端-Next.js + ant-design + redux + Hooks等</li>
          <li>后台管理-React + ant-design + redux + Hooks等</li>
          <li>后台接口-Koa2 + Mysql + Sequelize + JWT等</li>
          <li>破站匆匆上线，开发只用了几天时间，后续内容会不断完善</li>
        </ul>
      </AboutWrapper>
    </CommonLayout>
  )
})
