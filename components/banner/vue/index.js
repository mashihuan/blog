import React, { memo } from 'react'

import { VueJsWrapper } from './style'

export default memo(function VueJs() {
  return (
    <VueJsWrapper>
      <div className="left">
        <img src="/static/img/vue.png" alt=""/>
        <span>渐进式框架</span>
      </div>
      <div className="center">
        <span>数据</span>
        <span>驱动</span>
      </div>
      <div className="right">
        <span className="color">组件化</span>
        <span>简单</span>
        <span>易用</span>
        <span>灵活</span>
        <span className="color">双向绑定</span>
      </div>
    </VueJsWrapper>
  )
})
