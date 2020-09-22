import React, { memo } from 'react'

import { NextJsWrapper } from './style'

export default memo(function NextJs() {
  return (
    <NextJsWrapper>
      <div className="inner">
        <div className="left">
          <div className="top">
            <span>预渲染</span>
          </div>
          <div className="bottom">
            <span>导出静态站点</span>
            <span className="color">CSS-in-JS</span>
          </div>
        </div>
        <div className="center">
          <img src="/static/img/next.png" alt="next"/>
        </div>
        <div className="right">
          <div className="top">
            <span>完全可扩展</span>
            <span className="color">SSR</span>
          </div>
        <div className="bottom">
          <span>零配置</span>
        </div>
        </div>
      </div>
    </NextJsWrapper>
  )
})
