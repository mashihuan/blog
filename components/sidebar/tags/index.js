import React, { memo } from 'react'

import { SidebarUserTagsWrapper } from './style'

export default memo(function SidebarTags() {
  return (
    <SidebarUserTagsWrapper>
      <h4 className="title">标签</h4>
      <ul className="tags">
        <li className="tag-item">这货很懒，什么都没留下</li>
      </ul>
    </SidebarUserTagsWrapper>
  )
})
