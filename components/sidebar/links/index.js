import React, { memo } from 'react'

import { SidebarLinkTagsWrapper } from './style'

export default memo(function SidebarLinks() {
  return (
    <SidebarLinkTagsWrapper>
      <h4 className="title">友链</h4>
      <ul className="links">
        <li className="link-item">等一位有缘人</li>
      </ul>
    </SidebarLinkTagsWrapper>
  )
})
