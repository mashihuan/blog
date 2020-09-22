import React, { memo } from 'react'

import SidebarUser from './user'
import SidebarTags from './tags'
import SidebarLinks from './links'
import SidebarHotArticle from './hot-article'

export default memo(function Sidebar() {
  return (
    <>
      <SidebarUser/>
      <SidebarHotArticle/>
      <SidebarTags/>
      <SidebarLinks/>
    </>
  )
})
