import React, { memo } from 'react'

import { ReactJsWrapper } from './style'

export default memo(function ReactJs() {
  return (
    <ReactJsWrapper>
      <div className="left">
        <img src="/static/img/react.png" alt=""/>
        <div className="desc">
          <div className="desc-l">
            <div className="build">
              <span>构</span>
              <span>建</span>
            </div>
            <div className="face">用户界面</div>
          </div>
          <div className="desc-r">
            JavaScript库
          </div>
        </div>
      </div>
      <div className="center">
        <span>高<br/>效</span>
        <span>灵<br/>活</span>
        <span>J<br/>S<br/>X</span>
        <span>组<br/>件</span>
      </div>
      <div className="right">
        <p>声明式设计</p>
        <p>单向数据流</p>
      </div>
    </ReactJsWrapper>
  )
})
