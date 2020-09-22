import React, { memo } from 'react'

import { SidebarUserWrapper } from './style'

export default memo(function SidebarUser() {
  return (
    <SidebarUserWrapper>
      <div className="avatar">
        <img src="/static/img/avatar.png" alt=""/>
      </div>
      <div className="info">
        <p><span>姓名：马世环</span></p>
        <p><span>职业：前端工程师</span></p>
        <p><span>标签：代码洁癖、健身、斗图小王子</span></p>
        <p><span>QQ：1067615605</span></p>
        <p><span>规划：等攒够买三轮的钱，就去卖煎饼果子！</span></p>
      </div>
    </SidebarUserWrapper>
  )
})
